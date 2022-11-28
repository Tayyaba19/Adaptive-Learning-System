import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Request} from 'express'
import {Repository} from 'typeorm'
import {Subject} from './entity/subject.entity'
import {CreateSubjectDto} from './dto/createSubjectDto'
@Injectable()
export class SubjectService{

    constructor(
        @InjectRepository(Subject)
        private subjectRepository:Repository<Subject>
    ){}
    
    get():Promise<Subject []>{
        return this.subjectRepository.find();
    }

    // create(createSubjectDto: CreateSubjectDto){
    //     return this.subjectRepository.save(createSubjectDto);
    // }
    
    // update(
    // updateSubjectDto:UpdateSubjectDto
    // ,userid:number){
    //     return {body:updateSubjectDto,userid};
    // }

    // getuser(userid:number){
    //     return userid;
    // }
    
    // delete(userid:number){
    //     return userid
    // }

}