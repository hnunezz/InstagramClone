import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InstagramClone';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDpxYLiTVyP68SS_J0cJFJvHNe3O-X8KdY",
      authDomain: "instagramclone-f248d.firebaseapp.com",
      projectId: "instagramclone-f248d",
      storageBucket: "instagramclone-f248d.appspot.com",
      messagingSenderId: "572200577055",
      appId: "1:572200577055:web:2076483a40c02efba10d2a",
      measurementId: "G-T5E933D0KC"
    };

    // Initialize Firebasea
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
