import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUri = "http://localhost:5094";

  posts: Array<Post> = [];
  errors: Array<object> = [];
  constructor(private http: HttpClient) { }
  getResults(sortBy: string, sortDirection: string) {
      console.log(`Sort by: ${sortBy}, Direction: ${sortDirection}`);
      this.http.get(this.baseUri+"/posts",{params:{sortBy, sortDirection}})
       .subscribe({
          next: res => this.posts = Object.assign(new Array<Post>, res),
          error: err => this.errors = err.error.errors
      });
  }
}
