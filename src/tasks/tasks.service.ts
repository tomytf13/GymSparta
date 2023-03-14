import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4} from 'uuid';
import { UpdateTaskDto } from './dto/tasks.dto';
@Injectable()
export class TasksService {

    private tasks:Task[] =[
        {
            id: '1',
            title: 'First Task',
            description: "Some task",
            status: TaskStatus.PENDING,
        }
    ]
  

    getAllTasks() {
    return this.tasks;
    }
    createTasks(title:string,description:string, status:TaskStatus) {
        const task = {
            id: v4(),
            title,
            description,
            status
        }
        this.tasks.push(task)

        return task;
    }
    deleteTask(id:string) { 
        this.tasks= this.tasks.filter(task=> task.id!==id)
    }

    getTaskById(id:string): Task {
      return this.tasks.find(task=> task.id===id)
    }

    updateTasks(id:string, updatedFields: UpdateTaskDto) : Task {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task,updatedFields)
        this.tasks = this.tasks.map(task=> task.id===id ? newTask : task)
        return newTask;
    }   


}
