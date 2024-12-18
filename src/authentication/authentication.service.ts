import { Injectable } from '@nestjs/common';
import { Authentication } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}

  async getAllAuthentications(): Promise<Authentication[]> {
    return this.prisma.authentication.findMany();
  }

  async getAuthenticationById(id: number): Promise<Authentication> {
    return this.prisma.authentication.findUnique({
      where: {
        id,
      },
    });
  }

  async createAuthentication(data: Authentication): Promise<Authentication> {
    return this.prisma.authentication.create({
      data,
    });
  }

  async updateAuthentication(id: number, data: Authentication): Promise<Authentication> {
    return this.prisma.authentication.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deleteAuthentication(id: number): Promise<Authentication> {
    return this.prisma.authentication.delete(
      {where:{
        id}
      }
    );
  }
}
