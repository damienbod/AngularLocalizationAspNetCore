import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, NgForm, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from '../services/Product';
import { ProductCreateEdit } from  '../services/ProductCreateEdit';
import { Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';
import { TranslatePipe } from 'angular2localization/angular2localization';
import { Router} from '@angular/router';


@Component({
    selector: 'shopadmincomponent',
    template: require('./shop-admin.component.html'),
    directives: [CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class ShopAdminComponent extends Locale implements OnInit  {

    public message: string;
    public Product: ProductCreateEdit;
    public Currency: string;

    public Name_de: string;
    public Name_fr: string;
    public Name_it: string;
    public Name_en: string;
    public Description_de: string;
    public Description_fr: string;
    public Description_it: string;
    public Description_en: string;

    productForm: ControlGroup;
    name: Control;
    description: Control;
    priceEUR: Control;
    priceCHF: Control;
    namede: Control;
    namefr: Control;
    nameit: Control;
    nameen: Control;
    descriptionde: Control;
    descriptionfr: Control;
    descriptionit: Control;
    descriptionen: Control;
    submitted: boolean = false;
    saving: boolean = false;

    constructor(
        private router: Router,
        public _localeService: LocaleService,
        public localization: LocalizationService,
        private _productService: ProductService,
        private builder: FormBuilder
    ) {

        super(null, localization);

        this.message = "shop-admin.component";

        this._localeService.languageCodeChanged.subscribe(item => this.onLanguageCodeChangedDataRecieved(item));

        this.buildForm();
        
    }

    ngOnInit() {
        console.log("ngOnInit ShopAdminComponent");
        // TODO Get product if Id exists
        this.initProduct();

        this.Currency = this._localeService.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        }
    }

    buildForm(): void {
        this.name = new Control('', Validators.required);
        this.description = new Control('', Validators.required);
        this.priceEUR = new Control('', Validators.required);
        this.priceCHF = new Control('', Validators.required);

        this.namede = new Control('', Validators.required);
        this.namefr = new Control('', Validators.required);
        this.nameit = new Control('', Validators.required);
        this.nameen = new Control('', Validators.required);

        this.descriptionde = new Control('', Validators.required);
        this.descriptionfr = new Control('', Validators.required);
        this.descriptionit = new Control('', Validators.required);
        this.descriptionen = new Control('', Validators.required);

        this.productForm = this.builder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            priceEUR: ['', Validators.required],
            priceCHF: ['', Validators.required],
            namede: ['', Validators.required],
            namefr: ['', Validators.required],
            nameit: ['', Validators.required],
            nameen: ['', Validators.required],
            descriptionde: ['', Validators.required],
            descriptionfr: ['', Validators.required],
            descriptionit: ['', Validators.required],
            descriptionen: ['', Validators.required]
        });
    }

    public Create() {

        this.submitted = true;

        if (this.productForm.valid) {
            this.saving = true;

            this.Product.LocalizationRecords = [];
            this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "de-CH", Text: this.Name_de });
            this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "fr-CH", Text: this.Name_fr });
            this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "it-CH", Text: this.Name_it });
            this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "en-US", Text: this.Name_en });

            this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "de-CH", Text: this.Description_de });
            this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "fr-CH", Text: this.Description_fr });
            this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "it-CH", Text: this.Description_it });
            this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "en-US", Text: this.Description_en });

            this._productService.CreateProduct(this.Product)
                .subscribe(data => {
                    this.saving = false;
                    this.router.navigate(['/shop']);
                }, error => {
                    this.saving = false;
                    console.log(error)
                },
                () => this.saving = false);
        } 
  
    }

    private onLanguageCodeChangedDataRecieved(item) {
        console.log("onLanguageCodeChangedDataRecieved Shop Admin");
        console.log(item + " : "+ this._localeService.getCurrentLanguage());
    }


    private initProduct() {
        this.Product = new ProductCreateEdit();      
    }

}
