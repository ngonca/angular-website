import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl: string = environment.apiUrl_test;
  constructor(private httpClient:HttpClient) {}
  getPostList(){
    return this.httpClient.get< Array<Post> >(this.apiUrl+"/posts");
  }

  createPost(post:Post){
    return this.httpClient.post(this.apiUrl+"/posts",post);
  }
  deletePost(id:number){
    return this.httpClient.delete(this.apiUrl+`/posts/${id}`);

  }
}
