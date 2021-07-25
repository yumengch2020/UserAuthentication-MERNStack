import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  // enteredValue = '';
  // newPost = 'NO CONTENT';
  enteredTitle = ' ';
  enteredContent = ' ';
  // postCreated = new EventEmitter<Post>();

  constructor(public postService: PostsService) {}
  onAddPost(form: NgForm) {
    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
