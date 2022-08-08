import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

 @Input() item:string|undefined

 @Output() onCancel=new EventEmitter
 //creating onDelete event - since it occuring in parent , so put it in @output
 @Output() onDelete=new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

  delete(){
    //emit the event ondelete with account to be deleted as the argument
    this.onDelete.emit(this.item)
  }

}
