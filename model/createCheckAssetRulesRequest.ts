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
import { CreateCheckAssetRuleRequest } from './createCheckAssetRuleRequest';

export class CreateCheckAssetRulesRequest {
    /**
    * Check asset rules
    */
    'checkAssetRules': Array<CreateCheckAssetRuleRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkAssetRules",
            "baseName": "checkAssetRules",
            "type": "Array<CreateCheckAssetRuleRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateCheckAssetRulesRequest.attributeTypeMap;
    }
}

