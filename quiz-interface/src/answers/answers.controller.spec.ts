import { Test, TestingModule } from '@nestjs/testing';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { BadRequestException } from '@nestjs/common';
import { QuestionnaireAnswer } from '../entity/questionnaire-answer.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { answers } from '../fixtures/answers';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  find: jest.fn(),
});

describe('AppController', () => {
  let answerController: AnswersController;
  let answersRepository: MockRepository;

  beforeEach(async () => {
    const answer: TestingModule = await Test.createTestingModule({
      controllers: [AnswersController],
      providers: [
        AnswersService,
        {
          provide: getRepositoryToken(QuestionnaireAnswer),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    answerController = answer.get<AnswersController>(AnswersController);
    answersRepository = answer.get<MockRepository>(
      getRepositoryToken(QuestionnaireAnswer),
    );
  });

  describe('getQuestionnaireAnswers', () => {
    it('should return results if valid id is provided', async () => {
      answersRepository.find.mockResolvedValueOnce(answers);

      const result = await answerController.getQuestionnaireAnswers({
        questionnaireId: 1,
      });

      expect(result).toEqual(answers);
    });

    it('should return a bad request exception', async () => {
      const result = await answerController.getQuestionnaireAnswers({
        questionnaireId: null,
      });
      expect(result).toBeInstanceOf(BadRequestException);
    });
  });
});
