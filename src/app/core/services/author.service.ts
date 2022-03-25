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
  constructor(private http: HttpClient) { }

  // baseUrl = environment.URL;


  // SERVICE METHOD: to fetch all author from backend server 
  fetchAuthors(limit:number, skip:number) {
    // let url = `${this.baseUrl}${ApiPaths.}`;
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
