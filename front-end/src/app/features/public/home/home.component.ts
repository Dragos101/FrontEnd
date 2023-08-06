import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { BlogPost } from '../../blog-post/models/blog-post.mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  blogs$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {}
  
  ngOnInit(): void {
    this.blogs$ = this.blogPostService.getAllBlogPosts()
  }

  ngOnDestroy(): void {
    
  }
}
