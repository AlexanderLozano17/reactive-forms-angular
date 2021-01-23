import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  checkEmail(email: string) {
    // simulate http.get()
    return of({ isEmailAvailable: email !== 'nicolas@gmail.com'})
      .pipe(delay(500));
  }
}
