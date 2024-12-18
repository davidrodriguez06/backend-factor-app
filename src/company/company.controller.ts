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
import { CompanyService } from './company.service';
import { Company } from '@prisma/client';

@Controller('api/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() data: Company) {
    return this.companyService.createCompany(data);
  }

  @Get()
  async getAllCompanys() {
    return this.companyService.getAllCompanys();
  }

  @Get(':id')
  async getCompanyById(@Param('id') id: string) {
    const companyFound = await this.companyService.getCompanyById(+id);
    if (!companyFound) throw new NotFoundException('Company do not exist');
    return companyFound;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Company) {
    try {
      return await this.companyService.updateCompany(+id, data);
    } catch (error) {
      throw new NotFoundException('Company do not exist');
    }
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    try {
      return await this.companyService.deleteCompany(+id);
    } catch (error) {
      throw new NotFoundException('Company do not exist');
    }
  }
}
