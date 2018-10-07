import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services';

@Component({
	selector: 'app-hospitals',
	templateUrl: './hospitals.component.html',
	styles: []
})
export class HospitalsComponent implements OnInit {
	public hospitals: Hospital[] = [];
	currentPage: number = 0;

	constructor(public hospitalService: HospitalService) {}

	ngOnInit() {
		this.GetHospitals();
	}

	public GetHospitals() {
		this.hospitalService.GetHospitals(this.currentPage).subscribe(hospitals => {
			this.hospitals = hospitals;
		});
	}

	public GetHospital(hospital: Hospital) {}
	public UpdateHospital(hospital: Hospital) {}
	public DeleteHospital(hospital: Hospital) {}
	public FindHospital(query: string) {
		if (query.length <= 0) {
			this.GetHospitals();
			return;
		}
		this.hospitalService.FindHospital(query).subscribe(hospitals => {
			this.hospitals = hospitals;
		});
	}
}
