import { IsString,IsNotEmpty,MinLength,IsOptional,IsIn} from "class-validator"
import { TaskStatus } from "../task.entity"
import { v4 } from 'uuid';

export class CreateTaskDto {
    id:string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS,TaskStatus.PENDING,TaskStatus.DONE])
    status: TaskStatus
}

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS,TaskStatus.PENDING,TaskStatus.DONE])
    status?: TaskStatus;
}