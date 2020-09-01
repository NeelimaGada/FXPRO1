import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getByUser(userId) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" +userId)
  }
}
