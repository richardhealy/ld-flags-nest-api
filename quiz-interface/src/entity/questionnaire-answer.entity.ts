import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { QuestionnaireQuestion } from './questionnaire-question.entity';

@Entity()
export class QuestionnaireAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', name: 'questionnaire_id' })
  questionnaire_id: number;

  @Column({ type: 'integer', name: 'question_id' })
  question_id: number;

  @Column({ type: 'text' })
  answer: string;

  @OneToOne(() => QuestionnaireQuestion)
  @JoinColumn({ name: 'question_id' })
  question: QuestionnaireQuestion;
}
