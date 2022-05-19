import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getAuth } from "firebase/auth";
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public userEmail: string | any = '';

  public formAddPost: FormGroup = new FormGroup({
    'post_title': new FormControl(null)
  });

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      this.userEmail = user?.email;
    });
  }

  public addPost(): void {
    this.postService.post({
      email: this.userEmail,
      post_title: this.formAddPost.value.post_title
    });
  }
}
