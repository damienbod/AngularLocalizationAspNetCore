import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Product } from '../services/Product';
import { ProductCreateEdit } from  '../services/ProductCreateEdit';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { ProductService } from '../services/ProductService';

@Component({
    selector: 'shop-admincomponent',
    templateUrl: 'shop-admin.component.html'
})

export class ShopAdminComponent extends Localization implements OnInit  {

    public message: string;
    public Product: ProductCreateEdit = new ProductCreateEdit();
    public Currency: string;

    public Name_de: string;
    public Name_fr: string;
    public Name_it: string;
    public Name_en: string;
    public Description_de: string;
    public Description_fr: string;
    public Description_it: string;
    public Description_en: string;

    submitted = false;
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    saving: boolean = false;

    constructor(
        private router: Router,
        public _localeService: LocaleService,
        public localization: TranslationService,
        private _productService: ProductService
    ) {

        super(null, localization);

        this.message = 'shop-admin.component';

        this._localeService.languageCodeChanged.subscribe(
            (item: string) => { this.onLanguageCodeChangedDataRecieved(item); }
        );
    }

    onSubmit() {
        this.submitted = true;
        this.Create();
    }

    ngOnInit() {
        console.log('ngOnInit ShopAdminComponent');
        // TODO Get product if Id exists
        this.initProduct();

        this.Currency = this._localeService.getCurrentCurrency();
        if (!(this.Currency === 'CHF' || this.Currency === 'EUR')) {
            this.Currency = 'CHF';
        }
    }

    public Create() {

        this.submitted = true;

        this.saving = true;

        this.Product.LocalizationRecords = [];
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'de-CH', Text: this.Name_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'fr-CH', Text: this.Name_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'it-CH', Text: this.Name_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'en-US', Text: this.Name_en });

        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'de-CH', Text: this.Description_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'fr-CH', Text: this.Description_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'it-CH', Text: this.Description_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'en-US', Text: this.Description_en });

        this._productService.CreateProduct(this.Product)
            .subscribe(data => {
                this.saving = false;
                this.router.navigate(['/shop']);
            }, error => {
                this.saving = false;
                console.log(error);
            },
            () => this.saving = false);
    }

    private onLanguageCodeChangedDataRecieved(item: string) {
        console.log('onLanguageCodeChangedDataRecieved Shop Admin');
        console.log(item + ' : ' + this._localeService.getCurrentLanguage());
    }

    private initProduct() {
        this.Product = new ProductCreateEdit();
    }
}
