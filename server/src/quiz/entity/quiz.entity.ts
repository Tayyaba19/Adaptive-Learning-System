import {Topic} from 'src/topic/entity/topic.entity'
import {Entity,Column, ManyToOne, OneToMany,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    question:string;

    @Column()
    choice1:string;

    @Column()
    choice2:string;

    @Column()
    choice3:string;

    @Column()
    choice4:string;

    @Column()
    answer_key:string;

    @Column()
    level:string;

    @ManyToOne(()=>(Topic),(topic)=>topic.quiz)
    topic:Topic
}