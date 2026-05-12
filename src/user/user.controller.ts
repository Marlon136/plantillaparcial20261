import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  findUsers() {
    return this.userService.findUsers();
  }

  @Post(':id/posts')
  @UseGuards(ApiKeyGuard)
  createPost(@Param('id') id: string, @Body() createPostDto: CreatePostDto) {
    return this.userService.createPost(+id, createPostDto);
  }

  @Get(':id/posts')
  @UseGuards(ApiKeyGuard)
  findPosts(@Param('id') id: string) {
    return this.userService.findPosts(+id);
  }
}
