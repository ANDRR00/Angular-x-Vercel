import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsEnvironment } from './posts-environment';

describe('PostsEnvironment', () => {
  let component: PostsEnvironment;
  let fixture: ComponentFixture<PostsEnvironment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsEnvironment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsEnvironment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
