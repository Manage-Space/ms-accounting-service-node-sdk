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
import { CheckAssetType } from './checkAssetType';

export class CheckAssetEntryResponse {
    /**
    * Check Asset Entry ID.
    */
    'checkAssetEntryId': string;
    /**
    * Ledger ID.
    */
    'ledgerId': string | null;
    /**
    * Organization ID.
    */
    'orgId': string;
    /**
    * Site ID.
    */
    'siteId': string;
    /**
    * Location ID.
    */
    'locationId': string | null;
    /**
    * Amount.
    */
    'amount': number;
    /**
    * Description.
    */
    'description': string | null;
    'checkAssetType': CheckAssetType;
    /**
    * The date the entry was made.
    */
    'entryDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkAssetEntryId",
            "baseName": "checkAssetEntryId",
            "type": "string"
        },
        {
            "name": "ledgerId",
            "baseName": "ledgerId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "locationId",
            "baseName": "locationId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "checkAssetType",
            "baseName": "checkAssetType",
            "type": "CheckAssetType"
        },
        {
            "name": "entryDate",
            "baseName": "entryDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CheckAssetEntryResponse.attributeTypeMap;
    }
}

export namespace CheckAssetEntryResponse {
}