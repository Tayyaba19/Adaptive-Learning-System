import {Controller} from '@nestjs/common'
import {QuizService} from './quiz.service'
import { Patch,Body, Get, HttpStatus, Param, Post, Res,Delete ,Req} from '@nestjs/common'
import {Request} from 'express'
import {ParseIntPipe} from '@nestjs/common'

@Controller('/quiz')
export class QuizController{
    constructor(private quizService:QuizService){}//make object of user services on staring of controller
    
   
    @Get('/:id')
    get(@Param('id',ParseIntPipe) id:number){
        return this.quizService.get(id)
    }

    // @Post()
    // store(@Body() createQuizDto:CreateQuizDto){
    //     return this.QuizService.create(createQuizDto);
    // }

    // @Patch('/:userid')
    // update(@Body() updateQuizDto:UpdateQuizDto,@Param('userid',ParseIntPipe) userid:number){
    //     return this.QuizService.update(updateQuizDto,userid);
    // }

    // @Get('/:userid')
    // user(@Param('userid',ParseIntPipe) userid:number){
    //     return this.quizService.getuser(userid)
    //     }


    // @Delete('/:userid')
    // delete(@Param('userid',ParseIntPipe) userid:number){
    //     return this.quizService.delete(userid);
    // }
}