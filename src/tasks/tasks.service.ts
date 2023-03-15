import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';
import { TaskInterface } from './interfaces/tasks.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()

export class TasksService {



    constructor(@InjectModel('Task') private readonly taskModel: Model<TaskInterface>) { }


    async getAllTasks(): Promise<TaskInterface[]> {
        const tasks = await this.taskModel.find()
        return tasks;

    }

    async getTaskById(id: string): Promise<TaskInterface> {
        const task = await this.taskModel.findById(id)

        return task;
    }
    async createTasks(createTaskDTO: CreateTaskDto): Promise<TaskInterface> {
        const task = new this.taskModel(createTaskDTO);
        return await task.save();
    }

    async deleteTask(id: string): Promise<TaskInterface> {
        const deletedTask = this.taskModel.findByIdAndDelete(id)
        return deletedTask;
    }



    async updateTasks(id: string, updatedFields: UpdateTaskDto): Promise<TaskInterface> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(id, updatedFields,{new:true});
        return updatedTask
    }


}
