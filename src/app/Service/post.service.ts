import { Injectable } from '@angular/core';
import { getDatabase, ref } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor() { }

  public post(publication: any): void{
    const DTB = getDatabase()

    var usersRef = ref(DTB, `posts`);
    console.log("Post Service Here")
  }
}
