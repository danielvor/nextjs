import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local db
    // local array


    private readonly songs = [];
    // Save the songs in a local array
    create(song) {
        this.songs.push(song);
        return this.songs;
    }
    // Fetch all songs from the local array
    findAll() {
        return this.songs;
    }
}
