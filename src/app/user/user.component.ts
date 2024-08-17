import { Component, EventEmitter, Input,Output, input, output } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required : true}) user!: User;
 @Input({required: true}) selected!: boolean;
 @Output() select = new EventEmitter()

 get imagePath(){
  return 'assets/users/' + this.user.avatar
 }
 
  onSelected(){
    this.select.emit(this.user.id)
  }


}
