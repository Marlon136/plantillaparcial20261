import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreatePostDto } from 'src/post/dto/create-post.dto';
import { Post } from 'src/post/entities/post.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  createUser(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({
      ...dto,
    });
    return this.userRepo.save(user);
  }

  async createPost(userId: number, dto: CreatePostDto): Promise<Post> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`User ${userId} no existe`);

    const post = this.postRepo.create({
      ...dto,
      user,
    });
    return this.postRepo.save(post);
  }

  async findPosts(userId: number): Promise<Post[]> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`User ${userId} no existe`);
    return this.postRepo.findBy({ user: { id: userId } });
  }

  findUsers(): Promise<User[]> {
    return this.userRepo.find({
      relations: ['loans'], // carga los préstamos de cada cuenta
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
