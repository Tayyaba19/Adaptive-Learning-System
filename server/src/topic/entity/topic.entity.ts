import {Subject} from 'src/subject/entity/subject.entity'
import {Quiz} from 'src/quiz/entity/quiz.entity'
import {Entity,Column, ManyToOne, OneToMany,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Topic{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    // ({
    //     lenght:100
    // })
    Name:string;

    @ManyToOne(()=>(Subject),(subject)=>subject.topic)
    subject:Subject

    @OneToMany(()=>(Quiz),(quiz)=>quiz.topic)
    quiz:Quiz
}