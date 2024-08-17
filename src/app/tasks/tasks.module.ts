import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { HeaderComponent } from "../header/header.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TaskComponent,
        NewTaskComponent,
        TasksComponent, 
    ],
    exports: [
        TasksComponent
    ],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}
