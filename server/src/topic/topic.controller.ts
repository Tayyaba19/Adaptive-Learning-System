import {Controller} from '@nestjs/common'
import {TopicService} from './topic.service'
import { Patch,Body, Get, HttpStatus, Param, Post, Res,Delete ,Req} from '@nestjs/common'
import {Request} from 'express'
import {ParseIntPipe} from '@nestjs/common'

@Controller()
export class TopicController{
    constructor(private topicService:TopicService){}//make object of user services on staring of controller
    
    @Get()
    get(){
        return this.topicService.get();
    }

    // @Post()
    // store(@Body() createTopicDto:CreateTopicDto){
    //     return this.TopicService.create(createTopicDto);
    // }

    // @Patch('/:userid')
    // update(@Body() updateTopicDto:UpdateTopicDto,@Param('userid',ParseIntPipe) userid:number){
    //     return this.TopicService.update(updateTopicDto,userid);
    // }

    // @Get('/:userid')
    // user(@Param('userid',ParseIntPipe) userid:number){
    //     return this.topicService.getuser(userid)
    //     }


    // @Delete('/:userid')
    // delete(@Param('userid',ParseIntPipe) userid:number){
    //     return this.topicService.delete(userid);
    // }
}