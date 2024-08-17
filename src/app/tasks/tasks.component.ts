import { Component,Input } from '@angular/core';
import { TasksService } from './task/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {
  }
  
  get selectedUserTasks(){
    return this.tasksService.getUsersTasks(this.userId)
  }
  
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloselAddTask(){
    this.isAddingTask = false;
  }
}
