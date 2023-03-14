import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
       return  this.tasksService.createTasks(newTask.title, newTask.description,newTask.status)
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string){
     this.tasksService.deleteTask(id)  
    }

    @Put(':id')
    updateTask(@Param('id') id:string, @Body() updatedFields: UpdateTaskDto){
       return this.tasksService.updateTasks(id,updatedFields)

    }

}
