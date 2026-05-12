import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment as CommentEntity } from './entities/comment.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,

    @InjectRepository(CommentEntity)
    private commentRepo: Repository<CommentEntity>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createComment(
    postId: number,
    dto: CreateCommentDto,
  ): Promise<CommentEntity> {
    const post = await this.postRepo.findOneBy({ id: postId });

    if (!post) throw new NotFoundException(`Post ${postId} no existe`);

    const user = await this.userRepo.findOneBy({ id: dto.userId });

    if (!user) throw new NotFoundException(`User ${dto.userId} no existe`);

    const comment = this.commentRepo.create({
      content: dto.content,
      post,
      user,
    });

    return this.commentRepo.save(comment);
  }
}
