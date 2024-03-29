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

export class RentalIncomeEntryResponse {
    /**
    * Rental Income Entry ID.
    */
    'rentalIncomeEntryId': string;
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
    'rentalIncomeType': RentalIncomeType;
    /**
    * The start date of the entry.
    */
    'startDate': Date;
    /**
    * The end date of the entry.
    */
    'endDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rentalIncomeEntryId",
            "baseName": "rentalIncomeEntryId",
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
            "name": "rentalIncomeType",
            "baseName": "rentalIncomeType",
            "type": "RentalIncomeType"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return RentalIncomeEntryResponse.attributeTypeMap;
    }
}

export namespace RentalIncomeEntryResponse {
}
