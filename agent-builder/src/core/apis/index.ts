import {AutomationApi} from "./manager";
import {AuthenticationApi} from "../../../../manager/back/src/core/apis/authentication";


export const Apis = {
    manager: {
        automation: new AutomationApi(undefined, process.env.MANAGER_SERVER_URL ?? "http://localhost:4000")
    },
    authentication: new AuthenticationApi(undefined, "https://elyspio.fr/authentication")

}
