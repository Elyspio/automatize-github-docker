import {AutomationApi} from "./manager";
import {AuthenticationApi} from "./authentication";


export const managerServerUrl = process.env.MANAGER_SERVER_URL ?? "http://localhost:4000";
export const Apis = {
    manager: {
        automation: new AutomationApi(undefined, managerServerUrl)
    },
    authentication: new AuthenticationApi(undefined, "https://elyspio.fr/authentication")

}
