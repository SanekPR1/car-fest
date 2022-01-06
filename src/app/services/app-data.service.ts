import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Car } from "./car-interface";
import { Observable, of, throwError } from "rxjs";
import { delay, map, catchError, retry } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AppDataService {
    private carsCollection: Array<Car>;
    private url = 'http://localhost:3000/cars'

    constructor(
        private userService: UserService,
        private http: HttpClient
    ) { }


    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>(this.url, { responseType: 'json' })
            .pipe(retry(3), catchError(this.handleError)).pipe((data: any) => {
                data.subscribe((cars: Car[]) => this.carsCollection = cars);
                return data;
            });
    }

    getCar(id: number): Observable<Car> {
        return this.http.get<Car>(`${this.url}/${id}`, { responseType: 'json' })
            .pipe(map((data: any) => {
                return data;
            }), catchError((error: HttpErrorResponse) => throwError('Server did not respond')));
    }

    getCarByName(name: string): Observable<Car> {
        return this.http.get<Car[]>(`${this.url}`, { responseType: 'json' })
            .pipe(map((data: any) => {
                let cars = data.filter((d: Car) => {
                    return d.name.toLowerCase() === name.toLowerCase();
                })
                return cars[0];
            }), catchError((error: HttpErrorResponse) => throwError('Server did not respond')));
    }

    deleteCar(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`).pipe(map((response) => {
            console.log(response);
            return response;
        }), delay(1200));
    }

    createCar(car: Car): Observable<Car> {
        return this.http.post<Car>(this.url, car);
    }

    updateCar(updatingCar: Car): Observable<Car> {
        return this.http.put<Car>(`${this.url}/${updatingCar.id}`, updatingCar);
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