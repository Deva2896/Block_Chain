import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlockChainSystemService {

	endpoint1 = 'http://127.0.0.1:5000/';
  endpoint2 = 'http://127.0.0.1:8000/';
	httpOptions = {
  	headers: new HttpHeaders({
    	'Content-Type':  'application/json'
  	})
};

  constructor(private http: HttpClient) {
  }

  product(poststring)
  {
    console.log(poststring);
    return this.http.post(this.endpoint1+'submit_product',poststring);
  }


  retailer(poststring)
  {
    console.log(poststring);
    return this.http.post(this.endpoint1+'submit_retailer',poststring);
  }

  shopkeeper(poststring)
  {
    console.log(poststring);
    return this.http.post(this.endpoint1+'submit_shopkeeper',poststring);
  }

  mine()
  {
      let url = 'http://127.0.0.1:8000/mine'
      return this.http.get(url);
  }

  replace()
  {
      let url  = 'http://127.0.0.1:5000/fetch';
      return this.http.get(url);   
  }
}
