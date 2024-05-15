import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') // This will handle all routes that start with /users
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // This will handle GET /users or GET /users?role=value:string
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // This will handle GET /users/interns, and needs to be placed before the other GET /users/:id route because otherwise it would be interpreted as a GET /users/:id route
  //   @Get('interns')
  //   findAll() {
  //     return [];
  //   }

  @Get(':id') // This will handle GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // This will handle POST /users
  create(@Body() user: {}) {
    return { user };
  }

  @Patch(':id') // This will handle PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // This will handle DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
