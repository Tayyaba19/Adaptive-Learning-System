import {Controller} from '@nestjs/common'
import {SubjectService} from './subject.service'
import { Patch,Body, Get, HttpStatus, Param, Post, Res,Delete ,Req} from '@nestjs/common'
import {Request} from 'express'
import {ParseIntPipe} from '@nestjs/common'
import {CreateSubjectDto} from './dto/CreateSubjectDto'

@Controller('/subject')
export class SubjectController{
    constructor(private subjectService:SubjectService){}//make object of user services on staring of controller
    
    @Get()
    get(){
        return this.subjectService.get();
    }

    // @Post()
    // store(@Body() createSubjectDto:CreateSubjectDto){
    //     return this.subjectService.create(createSubjectDto);
    // }

    // @Patch('/:userid')
    // update(@Body() updateIntroductionDto:UpdateIntroductionDto,@Param('userid',ParseIntPipe) userid:number){
    //     return this.IntroductionService.update(updateIntroductionDto,userid);
    // }

    // @Get('/:userid')
    // user(@Param('userid',ParseIntPipe) userid:number){
    //     return this.introductionService.getuser(userid)
    //     }


    // @Delete('/:userid')
    // delete(@Param('userid',ParseIntPipe) userid:number){
    //     return this.introductionService.delete(userid);
    // }
}