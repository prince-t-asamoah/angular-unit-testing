import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.posts = this._postService.getPosts();
  }

  deletePost(post: Post) {
    this.posts = this._postService.deletePost(post);
  }
}
