import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";

interface User {
  jwtToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    //@ts-ignore
    return this.http.post<User>('http://127.0.0.1:9001/app.php/login', {email, password})
      .pipe(
        map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // @ts-ignore
          this.setSession(user)
          return user;
        })
      )
  }

  signup(email: string, password: string, c_password: string, birth_date: string) {
    //@ts-ignore
    return this.http.post<any>('http://127.0.0.1:9001/app.php/signup', {email, password, c_password, birth_date})
      .pipe(
        map(() => {

        })
      )
  }

  private setSession(authResult: { jwtToken: string }) {
    localStorage.setItem('id_token', authResult.jwtToken);
  }

  logout() {
    localStorage.removeItem("id_token");
    return true
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      // @ts-ignore
      return JSON.parse(atob(localStorage.getItem('id_token').split('.')[1])).id_token != null
    }
    return false
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {

  }

  isAdmin() {
    // @ts-ignore
    return JSON.parse(atob(localStorage.getItem('id_token').split('.')[1])).id_token.is_admin == 'Y'
  }

  token() {
    return localStorage.getItem('id_token')
  }
}
