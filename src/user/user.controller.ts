import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Post(':id/posts')
  @UseGuards(ApiKeyGuard)
  postPosts(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  //  @Get(':id/posts')
  //  @UseGuards(ApiKeyGuard)
  //  getPosts(@Param('id') id: string, @Body() createPostDto : CreatePostDto ) {
  //    return this.userService.getPosts(+id, createPostDto);
  //  }
}
