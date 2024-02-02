/**
 * ManageSpace Accounting API
 * ManageSpace Accounting API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CreateAccountReceivableRuleRequest } from './createAccountReceivableRuleRequest';

export class CreateAccountReceivableRulesRequest {
    /**
    * Account receivable rules
    */
    'accountReceivableRules': Array<CreateAccountReceivableRuleRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountReceivableRules",
            "baseName": "accountReceivableRules",
            "type": "Array<CreateAccountReceivableRuleRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountReceivableRulesRequest.attributeTypeMap;
    }
}

