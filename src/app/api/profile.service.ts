import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public http: HttpClient) { }

  GetProfile()
  {
    return this.http.get("https://randomuser.me/api/");
  }

}
