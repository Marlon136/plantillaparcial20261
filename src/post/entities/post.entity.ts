import { User } from 'src/user/entities/user.entity';
import { Comment } from './comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  caption!: string;

  @Column({ default: 0 })
  likes!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user!: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments!: Comment[];
}
