import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.comments)
  user!: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post!: Post;
}
