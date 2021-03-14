import {Apis, managerServerUrl} from "../../apis";
import {BuildAgentModelAdd} from "../../apis/manager";
import {DeployConfig, Job} from "../../../../../manager/back/src/core/services/manager/types";
import {Services} from "../index";
import {files} from "../storage";
import {$log} from "@tsed/common";
import {intervalBetweenKeepAlive, intervalBetweenRegister} from "../../../config/agent";
import {DeployJobModel} from "../../../web/controllers/agent/models";

export class ProductionAgentService {

    async getConfig() {
        return Services.storage.read<BuildAgentModelAdd>(files.conf);
    }

    async register() {
        const config = await this.getConfig();
        $log.info(`Registering to ${managerServerUrl}`, config)
        await Apis.manager.automation.automationAddProductionAgent(config)
    }

    async keepAlive() {
        $log.info(`Sending keep alive to ${managerServerUrl}`)
        await Apis.manager.automation.automationProductionAgentKeepAlive({url: (await this.getConfig()).uri})
    }


    async init() {
        setInterval(() => this.register(), intervalBetweenRegister)
        setInterval(() => this.keepAlive(), intervalBetweenKeepAlive)
        await this.register();
    }

    /**
     * Deploy a docker-compose configuration
     */
    async deploy({config}: DeployJobModel) {
        if (config?.docker?.compose?.path) {
            await Services.docker.compose.pull(config)
            await Services.docker.compose.up(config)

        }
    }
}
