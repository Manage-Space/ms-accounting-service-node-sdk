import localVarRequest from 'request';

export * from './accountReceivableIncome';
export * from './accountReceivableIncomeType';
export * from './accountReceivableResponse';
export * from './accountReceivableRuleResponse';
export * from './accountReceivableType';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './checkAssetEntryResponse';
export * from './checkAssetRuleResponse';
export * from './checkAssetType';
export * from './createAccountReceivableRuleRequest';
export * from './createAccountReceivableRulesRequest';
export * from './createCheckAssetRuleRequest';
export * from './createCheckAssetRulesRequest';
export * from './createFeeIncomeRuleRequest';
export * from './createFeeIncomeRulesRequest';
export * from './createGeneralLedgerAccountRequest';
export * from './createGeneralLedgerAccountsRequest';
export * from './createGeneralLedgerEntry201Response';
export * from './createGeneralLedgerEntryRequest';
export * from './createGeneralLedgerLineItemRequest';
export * from './createMerchandiseIncomeRuleRequest';
export * from './createMerchandiseIncomeRulesRequest';
export * from './createRentalIncomeRuleRequest';
export * from './createRentalIncomeRulesRequest';
export * from './feeIncomeEntryResponse';
export * from './feeIncomeRuleResponse';
export * from './feeIncomeType';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './generalLedgerAccountLineItemResponse';
export * from './generalLedgerAccountResponse';
export * from './generalLedgerAccountType';
export * from './generalLedgerEntryResponse';
export * from './generalLedgerEntryType';
export * from './getAccountReceivableRules200Response';
export * from './getAccountsReceivable200Response';
export * from './getCheckAssetEntries200Response';
export * from './getCheckAssetRules200Response';
export * from './getFeeIncomeEntries200Response';
export * from './getFeeIncomeRules200Response';
export * from './getGeneralLedgerAccountById200Response';
export * from './getGeneralLedgerAccounts200Response';
export * from './getMerchandiseIncomeEntries200Response';
export * from './getMerchandiseIncomeRules200Response';
export * from './getRentalIncomeEntries200Response';
export * from './getRentalIncomeRules200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './merchandiseIncomeEntryResponse';
export * from './merchandiseIncomeRuleResponse';
export * from './merchandiseIncomeType';
export * from './rentalIncomeEntryResponse';
export * from './rentalIncomeRuleResponse';
export * from './rentalIncomeType';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountReceivableIncome } from './accountReceivableIncome';
import { AccountReceivableIncomeType } from './accountReceivableIncomeType';
import { AccountReceivableResponse } from './accountReceivableResponse';
import { AccountReceivableRuleResponse } from './accountReceivableRuleResponse';
import { AccountReceivableType } from './accountReceivableType';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CheckAssetEntryResponse } from './checkAssetEntryResponse';
import { CheckAssetRuleResponse } from './checkAssetRuleResponse';
import { CheckAssetType } from './checkAssetType';
import { CreateAccountReceivableRuleRequest } from './createAccountReceivableRuleRequest';
import { CreateAccountReceivableRulesRequest } from './createAccountReceivableRulesRequest';
import { CreateCheckAssetRuleRequest } from './createCheckAssetRuleRequest';
import { CreateCheckAssetRulesRequest } from './createCheckAssetRulesRequest';
import { CreateFeeIncomeRuleRequest } from './createFeeIncomeRuleRequest';
import { CreateFeeIncomeRulesRequest } from './createFeeIncomeRulesRequest';
import { CreateGeneralLedgerAccountRequest } from './createGeneralLedgerAccountRequest';
import { CreateGeneralLedgerAccountsRequest } from './createGeneralLedgerAccountsRequest';
import { CreateGeneralLedgerEntry201Response } from './createGeneralLedgerEntry201Response';
import { CreateGeneralLedgerEntryRequest } from './createGeneralLedgerEntryRequest';
import { CreateGeneralLedgerLineItemRequest } from './createGeneralLedgerLineItemRequest';
import { CreateMerchandiseIncomeRuleRequest } from './createMerchandiseIncomeRuleRequest';
import { CreateMerchandiseIncomeRulesRequest } from './createMerchandiseIncomeRulesRequest';
import { CreateRentalIncomeRuleRequest } from './createRentalIncomeRuleRequest';
import { CreateRentalIncomeRulesRequest } from './createRentalIncomeRulesRequest';
import { FeeIncomeEntryResponse } from './feeIncomeEntryResponse';
import { FeeIncomeRuleResponse } from './feeIncomeRuleResponse';
import { FeeIncomeType } from './feeIncomeType';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GeneralLedgerAccountLineItemResponse } from './generalLedgerAccountLineItemResponse';
import { GeneralLedgerAccountResponse } from './generalLedgerAccountResponse';
import { GeneralLedgerAccountType } from './generalLedgerAccountType';
import { GeneralLedgerEntryResponse } from './generalLedgerEntryResponse';
import { GeneralLedgerEntryType } from './generalLedgerEntryType';
import { GetAccountReceivableRules200Response } from './getAccountReceivableRules200Response';
import { GetAccountsReceivable200Response } from './getAccountsReceivable200Response';
import { GetCheckAssetEntries200Response } from './getCheckAssetEntries200Response';
import { GetCheckAssetRules200Response } from './getCheckAssetRules200Response';
import { GetFeeIncomeEntries200Response } from './getFeeIncomeEntries200Response';
import { GetFeeIncomeRules200Response } from './getFeeIncomeRules200Response';
import { GetGeneralLedgerAccountById200Response } from './getGeneralLedgerAccountById200Response';
import { GetGeneralLedgerAccounts200Response } from './getGeneralLedgerAccounts200Response';
import { GetMerchandiseIncomeEntries200Response } from './getMerchandiseIncomeEntries200Response';
import { GetMerchandiseIncomeRules200Response } from './getMerchandiseIncomeRules200Response';
import { GetRentalIncomeEntries200Response } from './getRentalIncomeEntries200Response';
import { GetRentalIncomeRules200Response } from './getRentalIncomeRules200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { MerchandiseIncomeEntryResponse } from './merchandiseIncomeEntryResponse';
import { MerchandiseIncomeRuleResponse } from './merchandiseIncomeRuleResponse';
import { MerchandiseIncomeType } from './merchandiseIncomeType';
import { RentalIncomeEntryResponse } from './rentalIncomeEntryResponse';
import { RentalIncomeRuleResponse } from './rentalIncomeRuleResponse';
import { RentalIncomeType } from './rentalIncomeType';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountReceivableIncomeType": AccountReceivableIncomeType,
        "AccountReceivableType": AccountReceivableType,
        "CheckAssetType": CheckAssetType,
        "FeeIncomeType": FeeIncomeType,
        "GeneralLedgerAccountType": GeneralLedgerAccountType,
        "GeneralLedgerEntryType": GeneralLedgerEntryType,
        "MerchandiseIncomeType": MerchandiseIncomeType,
        "RentalIncomeType": RentalIncomeType,
}

let typeMap: {[index: string]: any} = {
    "AccountReceivableIncome": AccountReceivableIncome,
    "AccountReceivableResponse": AccountReceivableResponse,
    "AccountReceivableRuleResponse": AccountReceivableRuleResponse,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CheckAssetEntryResponse": CheckAssetEntryResponse,
    "CheckAssetRuleResponse": CheckAssetRuleResponse,
    "CreateAccountReceivableRuleRequest": CreateAccountReceivableRuleRequest,
    "CreateAccountReceivableRulesRequest": CreateAccountReceivableRulesRequest,
    "CreateCheckAssetRuleRequest": CreateCheckAssetRuleRequest,
    "CreateCheckAssetRulesRequest": CreateCheckAssetRulesRequest,
    "CreateFeeIncomeRuleRequest": CreateFeeIncomeRuleRequest,
    "CreateFeeIncomeRulesRequest": CreateFeeIncomeRulesRequest,
    "CreateGeneralLedgerAccountRequest": CreateGeneralLedgerAccountRequest,
    "CreateGeneralLedgerAccountsRequest": CreateGeneralLedgerAccountsRequest,
    "CreateGeneralLedgerEntry201Response": CreateGeneralLedgerEntry201Response,
    "CreateGeneralLedgerEntryRequest": CreateGeneralLedgerEntryRequest,
    "CreateGeneralLedgerLineItemRequest": CreateGeneralLedgerLineItemRequest,
    "CreateMerchandiseIncomeRuleRequest": CreateMerchandiseIncomeRuleRequest,
    "CreateMerchandiseIncomeRulesRequest": CreateMerchandiseIncomeRulesRequest,
    "CreateRentalIncomeRuleRequest": CreateRentalIncomeRuleRequest,
    "CreateRentalIncomeRulesRequest": CreateRentalIncomeRulesRequest,
    "FeeIncomeEntryResponse": FeeIncomeEntryResponse,
    "FeeIncomeRuleResponse": FeeIncomeRuleResponse,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GeneralLedgerAccountLineItemResponse": GeneralLedgerAccountLineItemResponse,
    "GeneralLedgerAccountResponse": GeneralLedgerAccountResponse,
    "GeneralLedgerEntryResponse": GeneralLedgerEntryResponse,
    "GetAccountReceivableRules200Response": GetAccountReceivableRules200Response,
    "GetAccountsReceivable200Response": GetAccountsReceivable200Response,
    "GetCheckAssetEntries200Response": GetCheckAssetEntries200Response,
    "GetCheckAssetRules200Response": GetCheckAssetRules200Response,
    "GetFeeIncomeEntries200Response": GetFeeIncomeEntries200Response,
    "GetFeeIncomeRules200Response": GetFeeIncomeRules200Response,
    "GetGeneralLedgerAccountById200Response": GetGeneralLedgerAccountById200Response,
    "GetGeneralLedgerAccounts200Response": GetGeneralLedgerAccounts200Response,
    "GetMerchandiseIncomeEntries200Response": GetMerchandiseIncomeEntries200Response,
    "GetMerchandiseIncomeRules200Response": GetMerchandiseIncomeRules200Response,
    "GetRentalIncomeEntries200Response": GetRentalIncomeEntries200Response,
    "GetRentalIncomeRules200Response": GetRentalIncomeRules200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "MerchandiseIncomeEntryResponse": MerchandiseIncomeEntryResponse,
    "MerchandiseIncomeRuleResponse": MerchandiseIncomeRuleResponse,
    "RentalIncomeEntryResponse": RentalIncomeEntryResponse,
    "RentalIncomeRuleResponse": RentalIncomeRuleResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
