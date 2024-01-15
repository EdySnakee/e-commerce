import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-angular-app';

  constructor(
    private fs : AngularFirestore
  ){}


  ngOnInit(): void {
    this.fs.collection('usuarios').snapshotChanges().subscribe(users => {
      console.log(':>>', users.map(u => u.payload.doc.data()));
    })
  }





}
