import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||'')

  constructor(private ds:DataService) {
    //asynchronous
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.transactions = result.transaction
      }
      },
      result=>{
        alert(result.error.message)
      }
      )    
   }

  ngOnInit(): void {
  }

}
