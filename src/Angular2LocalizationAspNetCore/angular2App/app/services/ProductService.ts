import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { Product } from './Product';
import { ProductCreateEdit } from './ProductCreateEdit';
import { Localization } from 'angular-l10n';

@Injectable()
export class ProductService {
    private actionUrl: string;
    private actionUrlShopAdmin: string;
    private headers: Headers;
    private isoCode: string;

    constructor(private _http: Http, private _configuration: Configuration, public _locale: Localization) {
        this.actionUrl = `${_configuration.Server}api/Shop/`;
        this.actionUrlShopAdmin = `${_configuration.Server}api/ShopAdmin/`;
    }

    private setHeaders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    // http://localhost:5000/api/Shop/AvailableProducts?culture=de-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=it-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=fr-CH
    // http://localhost:5000/api/Shop/AvailableProducts?culture=en-US
    public GetAvailableProducts = (): Observable<Product[]> => {
        console.log(this._locale.getCurrentLanguage());
        console.log(this._locale.getCurrentCountry());
        this.isoCode = `${this._locale.getCurrentLanguage()}-${this._locale.getCurrentCountry()}`;

        this.setHeaders();
        return this._http.get(`${this.actionUrl}AvailableProducts?culture=${this.isoCode}`, {
            headers: this.headers,
            body: '',
        }).map(res => res.json());
    }

    public CreateProduct = (product: ProductCreateEdit): Observable<ProductCreateEdit> => {
        let item: string = JSON.stringify(product);
        this.setHeaders();
        return this._http.post(this.actionUrlShopAdmin, item, {
            headers: this.headers
        }).map((response: Response) => <ProductCreateEdit>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}