import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUri = "http://localhost:5041";

  posts: Array<Post> = [];
  errors: Array<object> = [];
  constructor(private http: HttpClient) { }
  getResults(tags: string, sortBy: string, sortDirection: string) {
      this.http.get(this.baseUri+"/posts",{params:{tags, sortBy, sortDirection}})
       .subscribe({
          next: res => this.posts = Object.assign(new Array<Post>, res),
          error: err => this.errors = err.error.errors
      });
  }
}
