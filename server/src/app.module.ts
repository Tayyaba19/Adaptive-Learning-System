import {Module} from'@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SubjectModule} from './subject/subject.module';
import {Subject} from './subject/entity/subject.entity';
import {QuizModule} from './quiz/quiz.module';
import {Quiz} from './quiz/entity/quiz.entity';
import {TopicModule} from './topic/topic.module';
import {Topic} from './topic/entity/topic.entity';

@Module({
  imports:[SubjectModule,TopicModule,QuizModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'iparhai',
    entities: [Subject,Topic,Quiz],
    synchronize: true,
  }),]
})

export class AppModule {}