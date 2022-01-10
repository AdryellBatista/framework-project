import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlbumPhoto } from '../../models/album';

export interface DialogPhotoData {
  id: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-dialog-photo',
  templateUrl: './dialog-photo.component.html',
  styleUrls: ['./dialog-photo.component.scss']
})
export class DialogPhotoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlbumPhoto) {
  }

}
