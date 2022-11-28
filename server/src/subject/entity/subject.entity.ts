import {Topic} from 'src/topic/entity/topic.entity'
import {OneToMany,Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Subject{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name:string;

    @OneToMany(()=>Topic,(topic)=>topic.subject)
    topic:Topic[]
    
}