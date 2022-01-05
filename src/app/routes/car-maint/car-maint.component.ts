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

  createCar() {
    this.router.navigate(['/authenticated/car-detail', 0, 'create']);
  }
  showCarDetail(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'details']);
  }
  editCar(id: number) {
    this.router.navigate(['/authenticated/car-detail', id, 'edit']);
  }
  deleteCarQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }
  deleteCar(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCar(id).subscribe(
      c => {
        this.cancelDelete();
        this.carList = this.carList.filter(item => item.id !== id);
      },
      error => {
        this.deleteError = error;
        this.isDeleting = false
      }
    );
  }
  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }
}
