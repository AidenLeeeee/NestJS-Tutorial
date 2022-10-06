import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    console.log('hello controller');
    return { cats: 'get all cats api' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return 'one cat';
  }

  @Post()
  createOneCat() {
    return 'create cat';
  }

  @Put(':id')
  updateOneCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateOneCatPartially() {
    return 'update cat partially';
  }

  @Delete(':id')
  deleteOneCat() {
    return 'delete cat';
  }
}
