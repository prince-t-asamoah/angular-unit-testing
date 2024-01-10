import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubscription!: Subscription;
  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.postsSubscription = this._postService.postsSubscription$.subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  deletePost(post: Post) {
    this._postService.deletePost(post);
  }
}
