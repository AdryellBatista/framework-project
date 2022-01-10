import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shared/services/albums.service';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  arAlbums: Album[] = [];
  constructor( private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe(
      data => {
        this.arAlbums = data;
      }
    );
  }
}
