
import { LocalizationRecord } from './LocalizationRecord';

export class ProductCreateEdit {
    Id = 0;
    Name = '';
    Description = '';
    ImagePath = '';
    PriceEUR = 0;
    PriceCHF = 0;
    LocalizationRecords: LocalizationRecord[] = [];
}
