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
import { RentalIncomeType } from './rentalIncomeType';

export class CreateRentalIncomeRuleRequest {
    /**
    * General Ledger Account ID
    */
    'generalLedgerAccountId': string;
    'rentalIncomeType': RentalIncomeType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "generalLedgerAccountId",
            "baseName": "generalLedgerAccountId",
            "type": "string"
        },
        {
            "name": "rentalIncomeType",
            "baseName": "rentalIncomeType",
            "type": "RentalIncomeType"
        }    ];

    static getAttributeTypeMap() {
        return CreateRentalIncomeRuleRequest.attributeTypeMap;
    }
}

export namespace CreateRentalIncomeRuleRequest {
}
