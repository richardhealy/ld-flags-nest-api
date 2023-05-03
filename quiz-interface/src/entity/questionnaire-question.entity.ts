import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionnaireQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  short_code: string;
}
