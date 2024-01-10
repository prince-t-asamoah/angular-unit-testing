import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  ngOnInit(): void {}
}
