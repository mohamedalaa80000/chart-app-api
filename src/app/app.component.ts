import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router ,ParamMap} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  constructor(public route:ActivatedRoute,public router:Router) {
 
  }
 
  ngOnInit(){
 
  }
 
 
}
