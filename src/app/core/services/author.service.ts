import { Author, Data } from './../model/author.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  // getConfig() {
  //   return this.http.get<Config>(this.configUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  constructor(private http: HttpClient) { }
  // https://api.quotable.io/authors?limit=10&skip=20

  // fetchAuthors(limit:number, skip:number):Observable<Author[]> {
  // fetchAuthors(limit:number, skip:number) {
  fetchAuthors(limit:number, skip:number) {
    return this.http.get<Data>(`${environment.backedServer}authors?/limit=${limit}&skip=${skip}`).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      }),
      map((authors) => {
        return authors
      })
    )
  }

}
