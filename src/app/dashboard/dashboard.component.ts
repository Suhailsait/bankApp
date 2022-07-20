import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  user:any
  lDate:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=ds.currentUser
    this.lDate=new Date()

  }

  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {
      alert("Please Log In")
      this.router.navigateByUrl("")
    }
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount

    if(this.depositForm.valid){
    const result=this.ds.deposit(acno,pswd,amount)

    if(result){
      alert(amount+" deposited successfully and new balance is : "+result)
  }
}
else{
  alert("Invalid form")
}
}

  withdraw(){
    var acno1=this.withdrawForm.value.acno
    var pswd1=this.withdrawForm.value.pswd
    var amount1=this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
    const result1=this.ds.withdraw(acno1,pswd1,amount1)

    if(result1){
      alert(amount1+" withdraw successfully and new balance is : "+result1)
  }
  }
  else{
    alert("Invalid form")
  }
  }
  logOut(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
}
