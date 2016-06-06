
import { LocalizationRecord } from './LocalizationRecord';

export class ProductCreateEdit {
    Id: number[];
    Name: string;
    Description: string;
    ImagePath: string;
    PriceEUR: number;
    PriceCHF: number;
    LocalizationRecords: LocalizationRecord[];
} 
