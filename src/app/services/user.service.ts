import { Injectable } from "@angular/core";
import { UserApi } from "src/spa/users/users-api";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { delay } from 'rxjs/operators';
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = true;

    constructor(private router: Router) { }

    signIn(email: string, password: string): Observable<any> {
        if (email === 'test@gmail.com' && password === 'test') {
            this.isAuthenticated = true;
            return of({}).pipe(delay(2000));
        } else {
            return throwError('Invalid email or password');

        }
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }

}