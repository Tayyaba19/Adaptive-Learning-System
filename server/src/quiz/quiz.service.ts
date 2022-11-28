import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Request} from 'express'
import {Repository} from 'typeorm'
import {Quiz} from './entity/quiz.entity'

@Injectable()
export class QuizService{

    constructor(
        @InjectRepository(Quiz)
        private quizRepository:Repository<Quiz>
    ){}
    get(qid:number){
        return this.quizRepository.find({where:{
            topic:{
                Id:qid
            }
        }
});
}
    // getuser(userid:number){
    //     return userid;
    // }
    
    // delete(userid:number){
    //     return userid
    // }

}