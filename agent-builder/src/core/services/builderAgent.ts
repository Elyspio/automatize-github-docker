import {Apis} from "../apis";
import {BuildAgentModelAddAbilityEnum} from "../apis/manager";

export class BuilderAgentService {
    async init() {
        await Apis.manager.automation.automationAddBuildAgent({
            uri: "http://localhost:4001",
            ability: BuildAgentModelAddAbilityEnum.Docker
        })

        setInterval(() => {
            Apis.manager.automation.automationBuilderAgentKeepAlive({url: "http://localhost:4001"})
        }, 2500)

    }
}
