import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  ngOnInit() {

    // localStorage.setItem('cadena', 'Hola LocalStorage');
    let cad = localStorage.getItem('cadena');

  }

}
