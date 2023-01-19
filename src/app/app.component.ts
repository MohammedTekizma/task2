import { Component } from '@angular/core';
import jsonData from '../assets/json.json'
import {MatButtonModule} from '@angular/material/button'

interface jDAta{
  firstName:string;
  lastName:string;
  role:string;
  fb:string;
  twitter:string;
  linkedIn:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'task2';
  data: jDAta[] = jsonData;
  // ngOnInit(){
  //   console.log(this.data)
  // }
}