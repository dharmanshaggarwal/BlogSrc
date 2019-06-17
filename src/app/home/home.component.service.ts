import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    'providedIn': 'root'
})

export class HomeService {
    url = 'assets/data.json';

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get(this.url);
    }

}