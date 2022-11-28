import  {IsString} from 'class-validator'
export class CreateQuizDto{
 @IsString()
 question:string
 
 @IsString()
 choice1:string
 
 @IsString()
 choice2:string
 
 @IsString()
 choice3:string
 
 @IsString()
 choice4:string
 
 @IsString()
 answer_key:string
 
 @IsString()
 level:string
}