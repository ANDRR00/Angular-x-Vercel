import { Component, inject, OnInit, signal } from '@angular/core';
import { EnvironmentHelper, Post } from '../environment-helper';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-posts-environment',
  imports: [],
  templateUrl: './posts-environment.html',
  styleUrl: './posts-environment.scss',
})
export class PostsEnvironment implements OnInit{
  private postService = inject(EnvironmentHelper)

  posts = signal<Post[]>([]);
  isLoading = signal(false)
  error = signal('')


  isProduction = environment.production
  apiUrl = environment.apiUrl

  ngOnInit() {
    this.isLoading.set(true)

    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data.slice(0,5)),
        this.isLoading.set(false)
      },
      error: (err) => {
        this.error.set('Failed to load posts.');
        this.isLoading.set(false);
        console.log(err);
      }
    })
    
  }
}
