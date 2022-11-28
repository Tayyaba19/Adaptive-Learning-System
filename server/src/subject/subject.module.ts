import {SubjectController} from './subject.controller'
import {SubjectService} from './subject.service'
import {Module} from '@nestjs/common'
import {Subject} from './entity/subject.entity'
import {TypeOrmModule} from '@nestjs/typeorm'
// import {userRepository} from 

@Module({
  imports:[TypeOrmModule.forFeature([Subject])],
  providers:[SubjectService],
  controllers:[SubjectController]
})

export class SubjectModule{}