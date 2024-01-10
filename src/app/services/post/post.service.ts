import { Injectable } from '@angular/core';
import { Post } from '../../model/post';
import PostData from '../../mock/posts.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts = new BehaviorSubject<Post[]>(PostData);
  public postsSubscription$ = this.posts.asObservable();

  getPosts(): Post[] {
    return this.posts.getValue();
  }

  deletePost(post: Post): void {
    const postsData = this.posts.getValue();
    const filteredPosts = postsData.filter(
      (postItem) => postItem.id !== post.id
    );
    this.posts.next(filteredPosts);
  }
}
