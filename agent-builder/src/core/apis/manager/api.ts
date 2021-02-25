/* tslint:disable */
/* eslint-disable */
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BuildAgentModelAdd
 */
export interface BuildAgentModelAdd {
    /**
     * 
     * @type {string}
     * @memberof BuildAgentModelAdd
     */
    ability?: BuildAgentModelAddAbilityEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildAgentModelAdd
     */
    uri?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum BuildAgentModelAddAbilityEnum {
    Docker = 'docker'
}

/**
 * 
 * @export
 * @interface BuildAgentModelReturn
 */
export interface BuildAgentModelReturn {
    /**
     * 
     * @type {string}
     * @memberof BuildAgentModelReturn
     */
    ability?: BuildAgentModelReturnAbilityEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildAgentModelReturn
     */
    availability?: BuildAgentModelReturnAvailabilityEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildAgentModelReturn
     */
    uri?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum BuildAgentModelReturnAbilityEnum {
    Docker = 'docker'
}
/**
    * @export
    * @enum {string}
    */
export enum BuildAgentModelReturnAvailabilityEnum {
    Down = 'down',
    Running = 'running',
    Free = 'free'
}

/**
 * 
 * @export
 * @interface DockerComposeModel
 */
export interface DockerComposeModel {
    /**
     * 
     * @type {string}
     * @memberof DockerComposeModel
     */
    path?: string;
}
/**
 * 
 * @export
 * @interface DockerModel
 */
export interface DockerModel {
    /**
     * 
     * @type {Array<DockerComposeModel>}
     * @memberof DockerModel
     */
    compose?: Array<DockerComposeModel>;
}
/**
 * 
 * @export
 * @interface ProductionAgentModel
 */
export interface ProductionAgentModel {
    /**
     * 
     * @type {DockerModel}
     * @memberof ProductionAgentModel
     */
    docker?: DockerModel;
    /**
     * 
     * @type {string}
     * @memberof ProductionAgentModel
     */
    uri?: string;
}

/**
 * AutomationApi - axios parameter creator
 * @export
 */
export const AutomationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {BuildAgentModelAdd} [buildAgentModelAdd] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationAddBuildAgent: async (buildAgentModelAdd?: BuildAgentModelAdd, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/automate/agent/build`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(buildAgentModelAdd, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ProductionAgentModel} [productionAgentModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationAddProductionAgent: async (productionAgentModel?: ProductionAgentModel, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/automate/agent/production`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(productionAgentModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationGetBuilderAgent: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/automate/agent/build`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationGetProductionAgent: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/automate/agent/production`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AutomationApi - functional programming interface
 * @export
 */
export const AutomationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AutomationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {BuildAgentModelAdd} [buildAgentModelAdd] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async automationAddBuildAgent(buildAgentModelAdd?: BuildAgentModelAdd, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.automationAddBuildAgent(buildAgentModelAdd, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {ProductionAgentModel} [productionAgentModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async automationAddProductionAgent(productionAgentModel?: ProductionAgentModel, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.automationAddProductionAgent(productionAgentModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async automationGetBuilderAgent(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BuildAgentModelReturn>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.automationGetBuilderAgent(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async automationGetProductionAgent(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProductionAgentModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.automationGetProductionAgent(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AutomationApi - factory interface
 * @export
 */
export const AutomationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AutomationApiFp(configuration)
    return {
        /**
         * 
         * @param {BuildAgentModelAdd} [buildAgentModelAdd] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationAddBuildAgent(buildAgentModelAdd?: BuildAgentModelAdd, options?: any): AxiosPromise<void> {
            return localVarFp.automationAddBuildAgent(buildAgentModelAdd, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ProductionAgentModel} [productionAgentModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationAddProductionAgent(productionAgentModel?: ProductionAgentModel, options?: any): AxiosPromise<void> {
            return localVarFp.automationAddProductionAgent(productionAgentModel, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationGetBuilderAgent(options?: any): AxiosPromise<Array<BuildAgentModelReturn>> {
            return localVarFp.automationGetBuilderAgent(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        automationGetProductionAgent(options?: any): AxiosPromise<Array<ProductionAgentModel>> {
            return localVarFp.automationGetProductionAgent(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AutomationApi - object-oriented interface
 * @export
 * @class AutomationApi
 * @extends {BaseAPI}
 */
export class AutomationApi extends BaseAPI {
    /**
     * 
     * @param {BuildAgentModelAdd} [buildAgentModelAdd] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutomationApi
     */
    public automationAddBuildAgent(buildAgentModelAdd?: BuildAgentModelAdd, options?: any) {
        return AutomationApiFp(this.configuration).automationAddBuildAgent(buildAgentModelAdd, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ProductionAgentModel} [productionAgentModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutomationApi
     */
    public automationAddProductionAgent(productionAgentModel?: ProductionAgentModel, options?: any) {
        return AutomationApiFp(this.configuration).automationAddProductionAgent(productionAgentModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutomationApi
     */
    public automationGetBuilderAgent(options?: any) {
        return AutomationApiFp(this.configuration).automationGetBuilderAgent(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutomationApi
     */
    public automationGetProductionAgent(options?: any) {
        return AutomationApiFp(this.configuration).automationGetProductionAgent(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DockerControllerApi - axios parameter creator
 * @export
 */
export const DockerControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Array<'web-front' | 'web-back'>} [preset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dockerControllerGet: async (preset?: Array<'web-front' | 'web-back'>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/docker/dockerfiles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (preset) {
                localVarQueryParameter['preset'] = preset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DockerControllerApi - functional programming interface
 * @export
 */
export const DockerControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DockerControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Array<'web-front' | 'web-back'>} [preset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dockerControllerGet(preset?: Array<'web-front' | 'web-back'>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dockerControllerGet(preset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DockerControllerApi - factory interface
 * @export
 */
export const DockerControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DockerControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {Array<'web-front' | 'web-back'>} [preset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dockerControllerGet(preset?: Array<'web-front' | 'web-back'>, options?: any): AxiosPromise<string> {
            return localVarFp.dockerControllerGet(preset, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DockerControllerApi - object-oriented interface
 * @export
 * @class DockerControllerApi
 * @extends {BaseAPI}
 */
export class DockerControllerApi extends BaseAPI {
    /**
     * 
     * @param {Array<'web-front' | 'web-back'>} [preset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DockerControllerApi
     */
    public dockerControllerGet(preset?: Array<'web-front' | 'web-back'>, options?: any) {
        return DockerControllerApiFp(this.configuration).dockerControllerGet(preset, options).then((request) => request(this.axios, this.basePath));
    }
}


