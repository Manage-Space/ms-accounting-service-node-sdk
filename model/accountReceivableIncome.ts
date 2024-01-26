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
import { AccountReceivableIncomeType } from './accountReceivableIncomeType';

export class AccountReceivableIncome {
    'incomeType': AccountReceivableIncomeType;
    /**
    * Total.
    */
    'incomeTotal': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "incomeType",
            "baseName": "incomeType",
            "type": "AccountReceivableIncomeType"
        },
        {
            "name": "incomeTotal",
            "baseName": "incomeTotal",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccountReceivableIncome.attributeTypeMap;
    }
}

export namespace AccountReceivableIncome {
}
