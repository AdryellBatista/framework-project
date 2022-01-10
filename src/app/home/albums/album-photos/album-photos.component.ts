import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/shared/services/albums.service';
import { AlbumPhoto } from 'src/app/shared/models/album';
import { MatDialog } from '@angular/material/dialog';
import { DialogPhotoComponent } from 'src/app/shared/components/dialog-photo/dialog-photo.component';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: any;
  arPhotos: AlbumPhoto[] = [];
  constructor(
      private route: ActivatedRoute,
      private albumsService: AlbumsService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.albumId = params.id;
      if (!this.albumId) {
        return;
      }

      this.getAlbumPhotos(this.albumId);
    });
  }

  getAlbumPhotos(id) {
    this.albumsService.getAlbumPhotos(id).subscribe(
      data => {
        this.arPhotos = data;
      }
    );
  }

  openPhoto(photo: AlbumPhoto) {
    const dialogRef = this.dialog.open(DialogPhotoComponent, { data: photo});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
