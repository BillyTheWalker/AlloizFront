import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Portfolio} from '../models/portfolio';

@Injectable()
export class PortfolioService {

  controller = '/portfolio';

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Portfolio[]> {
    return this._httpClient.get<Portfolio[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<Portfolio[]> {
    return this._httpClient.get<Portfolio[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<Portfolio> {
    return this._httpClient.get<Portfolio>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err));
  }

  findOneAvailable(id: number): Observable<Portfolio> {
    return this._httpClient.get<Portfolio>(this.controller + '/find-one-available' + id).catch(err => Observable.throw(err));
  }

  save(port: Portfolio, form: HTMLFormElement): Observable<Portfolio> {
    let f = new FormData(form);
    f.append('portfolioJson', JSON.stringify(port));
    console.log(f.get('portfolioJson'));
    return this._httpClient.post<Portfolio>(this.controller + '/save', f, {headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err));

  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err));
  }

  update(port: Portfolio): Observable<Portfolio> {
    return this._httpClient.post<Portfolio>(this.controller + '/update', JSON.stringify(port)).catch(err => Observable.throw(err));
  }

  updateImage(form: HTMLFormElement, id: number): Observable<Portfolio> {
    return this._httpClient.post(`${this.controller}/update-image/${id}`, new FormData(form), {
      headers: new HttpHeaders().append('enctype', 'multipart/form-data')
    }).catch(err => Observable.throw(err));
  }
}
