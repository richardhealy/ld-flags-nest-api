import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionnaireAnswer } from '../entity/questionnaire-answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(QuestionnaireAnswer)
    private repo: Repository<QuestionnaireAnswer>,
  ) {}

  async findBy(attrs: Partial<QuestionnaireAnswer>) {
    return this.repo.find({ where: attrs, relations: ['question'] });
  }
}
