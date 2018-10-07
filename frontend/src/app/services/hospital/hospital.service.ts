import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URI } from '../../config';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Hospital } from '../../models/hospital.model';

@Injectable({
	providedIn: 'root'
})
export class HospitalService {
	public hospitalCount: number = 0;

	constructor(public http: HttpClient, public userService: UserService) {}

	public GetHospitals(page: number) {
		let url = API_URI + '/hospital?page=' + page;
		return this.http.get(url).pipe(
			map((res: any) => {
				this.hospitalCount = res.payload.count;
				return res.payload.hospitals;
			})
		);
	}

	public GetHospital(id: string) {
		let url = API_URI + '/hospital/' + id;
		return this.http.get(url).pipe(
			map((res: any) => {
				return res.payload.hospital;
			})
		);
	}

	public CreateHospital(hospital: Hospital) {
		let url = API_URI + '/hospital';
		return this.http.post(url, hospital, {
			headers: {
				Authorization: this.userService.token
			}
		});
	}

	public UpdateHospital(hospital: Hospital) {
		let url = API_URI + '/hospital/' + hospital._id;
		return this.http.put(url, hospital, {
			headers: {
				Authorization: this.userService.token
			}
		});
	}

	public RemoteHospital(id: string) {
		let url = API_URI + '/hospital/' + id;
		return this.http.delete(url, {
			headers: {
				Authorization: this.userService.token
			}
		});
	}

	public FindHospital(query: string) {
		let url = API_URI + '/search/hospitals?query=' + query;
		return this.http
			.get(url, {
				headers: {
					Authorization: this.userService.token
				}
			})
			.pipe(
				map((res: any) => {
					return res.payload.hospitals;
				})
			);
	}
}
