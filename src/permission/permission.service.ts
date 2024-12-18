import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async getAllPermissions(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  async getPermissionById(id: number): Promise<Permission> {
    return this.prisma.permission.findUnique({
      where: {
        id,
      },
    });
  }

  async createPermission(data: Permission): Promise<Permission> {
    return this.prisma.permission.create({
      data,
    });
  }

  async updatePermission(id: number, data: Permission): Promise<Permission> {
    return this.prisma.permission.update({ 
      where: { 
        id }, 
        data 
      });
  }

  async deletePermission(id: number): Promise<Permission> {
    return this.prisma.permission.delete(
      {where:{
        id}
      }
    );
  }
}