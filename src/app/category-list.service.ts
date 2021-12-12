import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./interface/category";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.post<Category[]>(`${environment.backend}/catlist`, {})
  }
}
