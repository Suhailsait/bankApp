import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  //PROPERTIES
  aim = "Perfect Banking Partner"
  accno = "Account Number please"

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  //dependency injection
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //USERDEFINED FUNCTION
  acnoChange(event: any) {
    this.loginForm.value.acno = event.target.value
    console.log(this.loginForm.value.acno);

  }
  pswdChange(event: any) {
    this.loginForm.value.pswd = event.target.value
    console.log(this.loginForm.value.pswd);


  }

  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if (this.loginForm.valid) {
      //asynchronous
    this.ds.login(acno,pswd)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem('currentUser',result.currentUser)
          localStorage.setItem('currentAcno',result.currentAcno)
          localStorage.setItem('token',result.token)

          alert(result.message)
          this.router.navigateByUrl('dashboard')
        }
        },
        result=>{
          alert(result.error.message)
        }
        )
      }
     else {
        alert("Invalid form")
    }
    }
    

//   login(a:any,p:any) {
//     var acno = a.value
//     var pswd = p.value

//     let db = this.db

//     if (acno in db) {
//       if (pswd == db[acno]["password"]) {
//         alert("login successful")
//       }
//       else {
//         alert("incorrect password")
//       }
//     }
//     else {
//       alert("user not exist")
//     }
//   }

}