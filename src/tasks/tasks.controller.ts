import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
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
    async createTask(@Res() res,@Body() newTask: CreateTaskDto) {
        const task = await this.tasksService.createTasks(newTask)
        return res.status(HttpStatus.OK).json({
            message: "recibido",
            task: task
        })
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(id)
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
        return this.tasksService.updateTasks(id, updatedFields)

    }

}
