import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/post/entities/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  username!: string;

  @Column({ type: 'varchar', nullable: true })
  bio!: string; // tasa anual ej. 0.12

  @Column({ default: 0 })
  followers!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments!: Comment[];
}
