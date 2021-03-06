import {DeployConfig, ProductionAgent} from "../types";
import {AgentIdentifier, AgentMethods, Base} from "./base";
import {Services} from "../../index";
import {AutomateApi} from "../../../apis/agent-prod";
import {ProductionApplications} from "../../../../web/controllers/automate/models";

export class AgentProduction extends Base implements AgentMethods<ProductionAgent> {

	public add(agent: Omit<ProductionAgent, "lastUptime" | "availability">) {
		return super.baseAdd<ProductionAgent>(agent, "production");
	}

	public update(agent: AgentIdentifier<ProductionAgent>, newAgent: Partial<ProductionAgent>) {
		return super.baseUpdate<ProductionAgent>(agent, newAgent, "production");
	}

	public delete(agent: AgentIdentifier<ProductionAgent>,) {
		super.baseDelete<ProductionAgent>(agent, "production");
	}

	public list(): ProductionAgent[] {
		return this.baseList<ProductionAgent>("production");
	}

	public keepAlive(agent: AgentIdentifier<ProductionAgent>): void {
		this.update(agent, {availability: "free", lastUptime: new Date()});
	}

	public askDeploy(config: DeployConfig) {
		const id = super.nextId;
		Services.manager.config.queues.deployments.enqueue({config: config, createdAt: new Date(), finishedAt: null, startedAt: null, id})
		Services.manager.saveConfig();
		return id;
	}

	public get(agent: AgentIdentifier<ProductionAgent>) {
		return Services.manager.config.agents.production.find(a => a.uri === agent)
	}

	public async getApps(): Promise<ProductionApplications[]> {
		const agents = this.list();
		return await Promise.all(agents.map(agent => new AutomateApi(undefined, agent.uri)
			.automateGetApps()
			.then(x => ({
				apps: x.data,
				agent
			}))));
	}


}


