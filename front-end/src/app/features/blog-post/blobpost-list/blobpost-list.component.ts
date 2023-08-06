import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.mode';

@Component({
  selector: 'app-blobpost-list',
  templateUrl: './blobpost-list.component.html',
  styleUrls: ['./blobpost-list.component.scss']
})
export class BlobpostListComponent implements OnInit {

  blogPosts$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {
  }
 
  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }
}
