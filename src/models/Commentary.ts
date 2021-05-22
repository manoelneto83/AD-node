import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('commentarys')
class Commentary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  book_bible: string;

  @Column()
  chapter: string;

  @Column()
  verse: string;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Commentary;
