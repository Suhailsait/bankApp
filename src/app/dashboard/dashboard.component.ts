import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    const result=this.ds.deposit(acno,pswd,amount)

    if(result){
      alert(amount+" deposited successfully and new balance is : "+result)
  }
}

  withdraw(){
    var acno1=this.acno1
    var pswd1=this.pswd1
    var amount1=this.amount1

    const result1=this.ds.withdraw(acno1,pswd1,amount1)

    if(result1){
      alert(amount1+" withdraw successfully and new balance is : "+result1)
  }
  }
}
