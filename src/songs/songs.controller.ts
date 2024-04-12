import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    // Controller methods will be implemented here
    @Get()
    findAll() {
        return 'This action returns all songs';
    }
    @Get(':id')
    findOne() {
        return 'This action returns a song';
    }
    @Post()
    create() {
        return 'This action adds a new song';
    }
    @Put(':id')
    update() {
        return 'This action updates a song';
    }
    @Delete(':id')
    remove() {
        return 'This action removes a song';
    }
}
