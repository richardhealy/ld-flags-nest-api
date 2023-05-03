import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { QuestionnaireAnswer } from 'src/entity/questionnaire-answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionnaireAnswer])],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
