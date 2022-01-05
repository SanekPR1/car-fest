import { Injectable } from "@angular/core";
import { UserApi } from "src/spa/users/users-api";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { delay, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "src/spa/users/user.interface";

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    dataTransfer: Array<any>;
    private url = 'http://localhost:3000/users'

    constructor(private router: Router, private http: HttpClient) {
        this.dataTransfer = null;
    }

    signIn(email: string, password: string): Observable<User> {
        return this.http.get<User>(`${this.url}?email=${email}&password=${password}`, { responseType: 'json' })
            .pipe(map((response: any) => {
                {
                    if (response && Object.keys(response).length !== 0) {
                        this.isAuthenticated = true;
                        this.dataTransfer = response.name;
                        return response;
                    } else {
                        return throwError('Invalid email or password');
                    }
                }
            }))
    }

    registerUser(registerForm: User) {
        return this.http.post(this.url, registerForm);
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}