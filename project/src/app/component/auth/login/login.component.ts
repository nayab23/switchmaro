import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private route: ActivatedRoute) { }
ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    });

    Aos.init({disable: 'mobile'});//AOS - 2
    Aos.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  // otp(){
  //     this.router.navigate(['otp'], {relativeTo:this.route});
  //   }

}
