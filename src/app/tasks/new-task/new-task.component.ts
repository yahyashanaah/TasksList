import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TasksService);

  
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    );
    this.close.emit();
  }
}
