import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./interface/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.post<Category[]>(`http://127.0.0.1:9001/app.php/catlist`, {})
  }
}
