import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Request} from 'express'
import {Repository} from 'typeorm'
import {Topic} from './entity/topic.entity'
import {CreateTopicDto} from './dto/createTopicDto'
@Injectable()
export class TopicService{

    constructor(
        @InjectRepository(Topic)
        private topicRepository:Repository<Topic>
    ){}
    
    get():Promise<Topic []>{
        return this.topicRepository.find();
    }

    // create(createTopicDto: CreateTopicDto){
    //     return this.topicRepository.save(createTopicDto);
    // }
    
    // update(
    // updateTopicDto:UpdateTopicDto
    // ,userid:number){
    //     return {body:updateTopicDto,userid};
    // }

    // getuser(userid:number){
    //     return userid;
    // }
    
    // delete(userid:number){
    //     return userid
    // }

}