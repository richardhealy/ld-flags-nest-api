import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PatientQuestionnaire {
  @PrimaryGeneratedColumn()
  id: number;

  // we could narrow this if we wanted to
  // we would define a one-to-one relationship here
  @Column({ type: 'integer' })
  patient_id: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: string;

  // According to TypeORM docs, Postgres doesn't have
  // `datetime` type, but sqlite does.
  @Column({ type: 'datetime' })
  completed_at: string;
}
