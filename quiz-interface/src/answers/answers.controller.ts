import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { AnswersService } from './answers.service';

@Controller({
  version: '1', // Version baked in
  path: '/questionnaires/:questionnaireId/answers',
})
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Get()
  async getQuestionnaireAnswers(@Param() params: { questionnaireId: number }) {
    if (!params.questionnaireId) {
      return new BadRequestException('No questionnaire id provided');
    }

    return await this.answersService.findBy({
      questionnaire_id: params.questionnaireId,
    });
  }
}
