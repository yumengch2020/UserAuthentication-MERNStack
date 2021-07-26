import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

//import { title } from 'process';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First post', content: 'The content of the first post is: ' },
  //   { title: 'Second post', content: 'The content of the second post is: ' },
  //   { title: 'Third post', content: 'The content of the third post is: ' },
  // ];
  posts: Post[] = [];
  private postSub: Subscription;
  //keyword 'public' will automaticlly create a new property in this component and store the incoming value in that property
  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  // onDelete(postId: string) {
  //   this.postsService.deletePost(postId);
  // }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
