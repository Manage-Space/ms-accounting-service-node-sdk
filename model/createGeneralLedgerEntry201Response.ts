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
import { GeneralLedgerEntryResponse } from './generalLedgerEntryResponse';

export class CreateGeneralLedgerEntry201Response {
    'data'?: Array<GeneralLedgerEntryResponse>;
    'success'?: boolean;
    'error'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GeneralLedgerEntryResponse>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CreateGeneralLedgerEntry201Response.attributeTypeMap;
    }
}

