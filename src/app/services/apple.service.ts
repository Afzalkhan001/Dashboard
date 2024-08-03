import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from '../models/apple';

@Injectable({
  providedIn: 'root'
})
export class AppleService {
  private baseurl='https://sheetdb.io/api/v1/5vu7yb6y5d0rg'
  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get<any>("this.baseurl")
  }
  adduser(user:Apple):Observable<any>{
    return this.http.post<any>(this.baseurl,{data:user})
  }
  deleteuser(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/id/${id}`)
  }
  getbyemail(email:String):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/search?email=${email}`)
  }
  updateuser(id:number,user:Apple):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/id/${id}`,{data:user})
  }
  
}
