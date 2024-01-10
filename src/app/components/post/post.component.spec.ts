import { TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('PostsComponent', () => {
  let component: PostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
    }).compileComponents();
  });
});
