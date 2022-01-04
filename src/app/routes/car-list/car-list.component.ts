import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppDataService } from 'src/app/services/app-data.service';
import { Car } from 'src/app/services/car-interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  allCars: Array<Car>;
  cars: Array<Car>;
  count = 0;

  constructor(private dataService: AppDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getCars().subscribe(items => {
      this.allCars = items;
      this.count = +this.route.snapshot.params['count'];
      this.updateList();
      this.route.params.forEach((params: Params) => {
        this.count = +params['count'];
        this.updateList();
      })
    })
  }

  updateList() {
    const AllCarsCopy = this.allCars.slice().sort((a, b) => this.compareSort(a, b));
    this.cars = (this.count > 0) ? AllCarsCopy.slice(0, this.count) : this.allCars;
  }

  compareSort(carA: Car, carB: Car): number {
    return carB.price - carA.price;
  }
}
