import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _httpClient: HttpClient) {}

  getPosts() {
    return this._httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  deletePost(post: Post) {
    return this._httpClient.delete(
      `https://jsonplaceholder.typicode.com/post/${post.id}`
    );
  }
}
