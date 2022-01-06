import { Injectable } from "@angular/core";
import { UserApi } from "src/spa/users/users-api";
import { Router } from "@angular/router";
import { forkJoin, Observable, of, Subscription, throwError } from "rxjs";
import { delay, map, timeout } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "src/spa/users/user.interface";
import { switchMap } from "rxjs/operators";

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    private url = 'http://localhost:3000/users'

    constructor(private router: Router, private http: HttpClient) {
    }

    signIn(email: string, password: string): Observable<User> {
        return this.http.get<User>(`${this.url}?email=${email}&password=${password}`, { responseType: 'json' })
            .pipe(map((response: any) => {
                {
                    if (response && Object.keys(response).length !== 0) {
                        this.isAuthenticated = true;
                        localStorage.setItem('user', JSON.stringify(response[0]));
                        return response;
                    } else {
                        throw new Error('Invalid email or password');
                    }
                }
            }))
    }

    registerUser(form: User) {
        let isExisted: Observable<boolean>;
        return this.http.get<User[]>(`${this.url}`, { responseType: 'json' })
            .pipe(switchMap(response => forkJoin(
                isExisted = this.isEmailExisted(form.email, response)))
            ).pipe(switchMap(() => {
                let existed: boolean
                isExisted.subscribe(result => existed = result);
                console.log(existed);
                if (!existed) {
                    return this.http.post(this.url, form);
                } else {
                    return throwError(`User with the email ${form.email} is already existed`);
                }
            }))
    }

    private isEmailExisted(email: string, users: User[]) {
        let filteredUsers = users.filter(item => item.email === email);
        if (filteredUsers && filteredUsers.length > 0) {
            return of(true);
        }
        return of(false);
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        localStorage.clear();
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