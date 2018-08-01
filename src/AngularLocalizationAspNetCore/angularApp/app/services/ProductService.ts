import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration } from '../app.constants';
import { Product } from './Product';
import { ProductCreateEdit } from './ProductCreateEdit';
import { LocaleService } from 'angular-l10n';

@Injectable()
export class ProductService {
    private actionUrl: string;
    private actionUrlShopAdmin: string;
    private headers: HttpHeaders;
    private isoCode = '';

    constructor(public locale: LocaleService, private http: HttpClient, configuration: Configuration ) {
        this.actionUrl = `${configuration.Server}api/Shop/`;
        this.actionUrlShopAdmin = `${configuration.Server}api/ShopAdmin/`;

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    // http://localhost:5000/api/Shop/AvailableProducts?culture=de-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=it-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=fr-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=en-US
    public GetAvailableProducts(): Observable<Product[]> {
        console.log(this.locale.getCurrentLanguage());
        console.log(this.locale.getCurrentCountry());
        this.isoCode = `${this.locale.getCurrentLanguage()}-${this.locale.getCurrentCountry()}`;

        return this.http.get<Product[]>(`${this.actionUrl}AvailableProducts?culture=${this.isoCode}`, { headers: this.headers });
    }

    public CreateProduct(product: ProductCreateEdit): Observable<ProductCreateEdit> {
        const item = JSON.stringify(product);

        return this.http.post<ProductCreateEdit>(this.actionUrlShopAdmin, item, { headers: this.headers });
    }
}
