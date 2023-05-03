import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientQuestionnaire } from './entity/patient-questionnaire.entity';
import { QuestionnaireAnswer } from './entity/questionnaire-answer.entity';
import { QuestionnaireQuestion } from './entity/questionnaire-question.entity';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'questionnaire.db',
      entities: [
        PatientQuestionnaire,
        QuestionnaireAnswer,
        QuestionnaireQuestion,
      ],
    }),
    AnswersModule,
  ],
})
export class AppModule {}
