import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { CategoryService } from './category.service'; 
import { Category} from '@prisma/client';
@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() data:  Category) {
    return this.categoryService.createCategory(data);
  }

  @Get()
  async getAllCategorys() {
    return this.categoryService.getAllCategorys();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const categoryFound = await this.categoryService.getCategoryById(+id);
    if (!categoryFound) throw new NotFoundException('Category do not exist');
    return categoryFound;
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() data: Category) {
    try {
      return await this.categoryService.updateCategory(+id, data);
    } catch (error) {
      throw new NotFoundException('Category do not exist');
    }
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    try {
      return await this.categoryService.deleteCategory(+id);
    } catch (error) {
      throw new NotFoundException('Category do not exist');
    }
  }
}
