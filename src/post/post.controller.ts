import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post('accounts/:id/loans')
  createComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateCommentDto,
  ) {
    return this.postService.createComment(id, dto);
  }
}
