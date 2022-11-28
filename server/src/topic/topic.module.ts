import {TopicController} from './topic.controller'
import {TopicService} from './topic.service'
import {Module} from '@nestjs/common'
import {Topic} from './entity/topic.entity'
import {TypeOrmModule} from '@nestjs/typeorm'
// import {userRepository} from 

@Module({
  imports:[TypeOrmModule.forFeature([Topic])],
  providers:[TopicService],
  controllers:[TopicController]
})

export class TopicModule{}