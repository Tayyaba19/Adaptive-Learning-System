import {QuizController} from './quiz.controller'
import {QuizService} from './quiz.service'
import {Module} from '@nestjs/common'
import {Quiz} from './entity/quiz.entity'
import {TypeOrmModule} from '@nestjs/typeorm'
// import {userRepository} from 

@Module({
  imports:[TypeOrmModule.forFeature([Quiz])],
  providers:[QuizService],
  controllers:[QuizController]
})

export class QuizModule{}