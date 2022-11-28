import {IsString} from 'class-validator'
export class CreateSubjectDto{
    @IsString()
    Name:string
}