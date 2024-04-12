import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) { }
    // Controller methods will be implemented here
    @Get()
    findAll() {
        return this.songsService.findAll();
    }
    @Get(':id')
    findOne() {
        return 'This action returns a song';
    }
    @Post()
    create() {
        return this.songsService.create('Animals by Martin Garrix');
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
