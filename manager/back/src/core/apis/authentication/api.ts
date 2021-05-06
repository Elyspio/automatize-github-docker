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


import {Configuration} from './configuration';
import globalAxios, {AxiosInstance, AxiosPromise} from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
	assertParamExists,
	createRequestFunction,
	DUMMY_BASE_URL,
	serializeDataIfNeeded,
	setApiKeyToObject,
	setBasicAuthToObject,
	setBearerAuthToObject,
	setOAuthToObject,
	setSearchParams,
	toPathString
} from './common';
// @ts-ignore
import {BASE_PATH, BaseAPI, COLLECTION_FORMATS, RequestArgs, RequiredError} from './base';

/**
 *
 * @export
 * @interface DockerModel
 */
export interface DockerModel {
	/**
	 *
	 * @type {string}
	 * @memberof DockerModel
	 */
	password: string;
	/**
	 *
	 * @type {string}
	 * @memberof DockerModel
	 */
	username: string;
}

/**
 *
 * @export
 * @interface GenericError
 */
export interface GenericError {
	/**
	 * The error name
	 * @type {string}
	 * @memberof GenericError
	 */
	name: string;
	/**
	 * An error message
	 * @type {string}
	 * @memberof GenericError
	 */
	message: string;

	[key: string]: object | any;
}

/**
 *
 * @export
 * @interface GithubModel
 */
export interface GithubModel {
	/**
	 *
	 * @type {string}
	 * @memberof GithubModel
	 */
	token: string;
	/**
	 *
	 * @type {string}
	 * @memberof GithubModel
	 */
	user: string;
}

/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
	/**
	 *
	 * @type {string}
	 * @memberof InlineObject
	 */
	token?: string;
}

/**
 *
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
	/**
	 *
	 * @type {string}
	 * @memberof InlineObject1
	 */
	user?: string;
}

/**
 *
 * @export
 * @interface KeysModel
 */
export interface KeysModel {
	/**
	 *
	 * @type {DockerModel}
	 * @memberof KeysModel
	 */
	docker?: DockerModel;
	/**
	 *
	 * @type {GithubModel}
	 * @memberof KeysModel
	 */
	github?: GithubModel;
}

/**
 *
 * @export
 * @interface PostLoginInitRequest
 */
export interface PostLoginInitRequest {
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginInitRequest
	 */
	hash?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginInitRequest
	 */
	name?: string;
}

/**
 *
 * @export
 * @interface PostLoginModel
 */
export interface PostLoginModel {
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginModel
	 */
	token?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginModel
	 */
	comment?: string;
}

/**
 *
 * @export
 * @interface PostLoginModelWithSalt
 */
export interface PostLoginModelWithSalt {
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginModelWithSalt
	 */
	salt: string;
}

/**
 *
 * @export
 * @interface PostLoginRequest
 */
export interface PostLoginRequest {
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginRequest
	 */
	hash?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PostLoginRequest
	 */
	name?: string;
}

/**
 *
 * @export
 * @interface Unauthorized
 */
export interface Unauthorized {
	/**
	 * The error name
	 * @type {string}
	 * @memberof Unauthorized
	 */
	name: string;
	/**
	 * An error message
	 * @type {string}
	 * @memberof Unauthorized
	 */
	message: string;
	/**
	 * The status code of the exception
	 * @type {number}
	 * @memberof Unauthorized
	 */
	status: number;
	/**
	 * A list of related errors
	 * @type {Array<GenericError>}
	 * @memberof Unauthorized
	 */
	errors?: Array<GenericError>;
	/**
	 * The stack trace (only in development mode)
	 * @type {Array<string>}
	 * @memberof Unauthorized
	 */
	stack?: Array<string>;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
	return {
		/**
		 *
		 * @param {InlineObject1} [inlineObject1]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationDeleteToken: async (inlineObject1?: InlineObject1, options: any = {}): Promise<RequestArgs> => {
			const localVarPath = `/core/authentication/valid`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'DELETE', ...baseOptions, ...options};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;


			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
			localVarRequestOptions.data = serializeDataIfNeeded(inlineObject1, localVarRequestOptions, configuration)

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
		authenticationGet: async (options: any = {}): Promise<RequestArgs> => {
			const localVarPath = `/core/authentication`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
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
		 * @param {PostLoginRequest} [postLoginRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationLogin: async (postLoginRequest?: PostLoginRequest, options: any = {}): Promise<RequestArgs> => {
			const localVarPath = `/core/authentication/login`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;


			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
			localVarRequestOptions.data = serializeDataIfNeeded(postLoginRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 *
		 * @param {PostLoginInitRequest} [postLoginInitRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationLoginInit: async (postLoginInitRequest?: PostLoginInitRequest, options: any = {}): Promise<RequestArgs> => {
			const localVarPath = `/core/authentication/login/init`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;


			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
			localVarRequestOptions.data = serializeDataIfNeeded(postLoginInitRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 *
		 * @param {InlineObject} [inlineObject]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationValidToken: async (inlineObject?: InlineObject, options: any = {}): Promise<RequestArgs> => {
			const localVarPath = `/core/authentication/valid`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;


			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
			localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	}
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
	return {
		/**
		 *
		 * @param {InlineObject1} [inlineObject1]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async authenticationDeleteToken(inlineObject1?: InlineObject1, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.authenticationDeleteToken(inlineObject1, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 *
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async authenticationGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.authenticationGet(options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 *
		 * @param {PostLoginRequest} [postLoginRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async authenticationLogin(postLoginRequest?: PostLoginRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoginModel>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.authenticationLogin(postLoginRequest, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 *
		 * @param {PostLoginInitRequest} [postLoginInitRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async authenticationLoginInit(postLoginInitRequest?: PostLoginInitRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostLoginModelWithSalt>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.authenticationLoginInit(postLoginInitRequest, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 *
		 * @param {InlineObject} [inlineObject]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async authenticationValidToken(inlineObject?: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.authenticationValidToken(inlineObject, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
	}
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
	const localVarFp = AuthenticationApiFp(configuration)
	return {
		/**
		 *
		 * @param {InlineObject1} [inlineObject1]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationDeleteToken(inlineObject1?: InlineObject1, options?: any): AxiosPromise<void> {
			return localVarFp.authenticationDeleteToken(inlineObject1, options).then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationGet(options?: any): AxiosPromise<void> {
			return localVarFp.authenticationGet(options).then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {PostLoginRequest} [postLoginRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationLogin(postLoginRequest?: PostLoginRequest, options?: any): AxiosPromise<PostLoginModel> {
			return localVarFp.authenticationLogin(postLoginRequest, options).then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {PostLoginInitRequest} [postLoginInitRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationLoginInit(postLoginInitRequest?: PostLoginInitRequest, options?: any): AxiosPromise<PostLoginModelWithSalt> {
			return localVarFp.authenticationLoginInit(postLoginInitRequest, options).then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {InlineObject} [inlineObject]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		authenticationValidToken(inlineObject?: InlineObject, options?: any): AxiosPromise<void> {
			return localVarFp.authenticationValidToken(inlineObject, options).then((request) => request(axios, basePath));
		},
	};
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
	/**
	 *
	 * @param {InlineObject1} [inlineObject1]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AuthenticationApi
	 */
	public authenticationDeleteToken(inlineObject1?: InlineObject1, options?: any) {
		return AuthenticationApiFp(this.configuration).authenticationDeleteToken(inlineObject1, options).then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AuthenticationApi
	 */
	public authenticationGet(options?: any) {
		return AuthenticationApiFp(this.configuration).authenticationGet(options).then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {PostLoginRequest} [postLoginRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AuthenticationApi
	 */
	public authenticationLogin(postLoginRequest?: PostLoginRequest, options?: any) {
		return AuthenticationApiFp(this.configuration).authenticationLogin(postLoginRequest, options).then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {PostLoginInitRequest} [postLoginInitRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AuthenticationApi
	 */
	public authenticationLoginInit(postLoginInitRequest?: PostLoginInitRequest, options?: any) {
		return AuthenticationApiFp(this.configuration).authenticationLoginInit(postLoginInitRequest, options).then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {InlineObject} [inlineObject]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof AuthenticationApi
	 */
	public authenticationValidToken(inlineObject?: InlineObject, options?: any) {
		return AuthenticationApiFp(this.configuration).authenticationValidToken(inlineObject, options).then((request) => request(this.axios, this.basePath));
	}
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
	return {
		/**
		 *
		 * @param {string} username
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersGetUserKeys: async (username: string, options: any = {}): Promise<RequestArgs> => {
			// verify required parameter 'username' is not null or undefined
			assertParamExists('usersGetUserKeys', 'username', username)
			const localVarPath = `/core/users/{username}/keys`
				.replace(`{${"username"}}`, encodeURIComponent(String(username)));
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
	return {
		/**
		 *
		 * @param {string} username
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async usersGetUserKeys(username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KeysModel>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.usersGetUserKeys(username, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
	}
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
	const localVarFp = UsersApiFp(configuration)
	return {
		/**
		 *
		 * @param {string} username
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		usersGetUserKeys(username: string, options?: any): AxiosPromise<KeysModel> {
			return localVarFp.usersGetUserKeys(username, options).then((request) => request(axios, basePath));
		},
	};
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
	/**
	 *
	 * @param {string} username
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof UsersApi
	 */
	public usersGetUserKeys(username: string, options?: any) {
		return UsersApiFp(this.configuration).usersGetUserKeys(username, options).then((request) => request(this.axios, this.basePath));
	}
}


