import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/services/car-interface';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-car-maint',
  templateUrl: './car-maint.component.html',
  styleUrls: ['./car-maint.component.css']
})
export class CarMaintComponent implements OnInit {
  carList: Array<Car>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private router: Router,
    private dataService: AppDataService
  ) {
    dataService.getCars().subscribe((data) => {
      this.carList = data;
    });
  }

  ngOnInit(): void {
  }

  createCar() { }
  showCarDetail(itemId: number) { }
  editCar(itemId: number) { }
  deleteCarQuestion(itemId: number) { }
  deleteCar(itemId: number) { }
  cancelDelete() { }
}
