import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-wanttoswitch',
  templateUrl: './wanttoswitch.component.html',
  styleUrls: ['./wanttoswitch.component.css']
})
export class WanttoswitchComponent implements OnInit{

  ngOnInit() {
    Aos.init({disable: 'mobile'});//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
