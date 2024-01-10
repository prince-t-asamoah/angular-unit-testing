import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PostComponent } from './post.component';

describe('PostsComponent', () => {
  let component: PostComponent | null;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
      providers: [provideHttpClient(withFetch())],
    }).compileComponents();
    fixture = TestBed.createComponent(PostComponent);
    component = null;
  });

  it('should create post component', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
