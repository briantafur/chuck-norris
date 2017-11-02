import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/pluck';
// import 'rxjs/add/observable/interval';
import 'rxjs/Rx';

@Injectable()
export class PostService {

  url = 'https://api.chucknorris.io/jokes/random';
  constructor(private httpClient: HttpClient) { }

  getJokes(): Observable<{}> {
    return Observable.interval(6000).flatMap(() => {
      return this.httpClient.get(this.url).pluck('value');
    });

  }


}
