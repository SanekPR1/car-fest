import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Car } from "./car-interface";
import { Observable, of, throwError } from "rxjs";
import { delay, map, catchError } from "rxjs/operators";

@Injectable()
export class AppDataService {
    private carsCollection: Array<Car> = [
        { id: 1, name: "Ford", model: "Focus", price: 4500 },
        { id: 2, name: "Mazda", model: "626", price: 900 },
        { id: 3, name: "Chery", model: "QQ", price: 1200 },
        { id: 4, name: "Audi", model: "Q5", price: 2200 },
        { id: 5, name: "BMW", model: "X6", price: 14500 },
        { id: 6, name: "Fiat", model: "Doblo", price: 2400 }
    ];

    constructor(private userService: UserService) { }


    getCars(): Observable<Car[]> {
        return of(this.carsCollection);
    }

    getCar(id: number): Observable<Car> {
        const car = this.carsCollection.find(item => item.id === id);
        return of(car);
    }

    deleteCar(id: number): Observable<any> {

        return of({}).pipe(delay(2000),
            map(() => this.carsCollection.splice(this.carsCollection.findIndex(item => item.id === id), 1)));
    }
}