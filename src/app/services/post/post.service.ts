import { Injectable } from '@angular/core';
import { Post } from '../../model/post';
import PostData from '../../mock/posts.json';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getPosts(): Post[] {
    return PostData;
  }

  deletePost(post: Post): Post[] {
    const filteredPostData = PostData.filter(
      (postItem) => postItem.id !== post.id
    );
    return filteredPostData;
  }
}
