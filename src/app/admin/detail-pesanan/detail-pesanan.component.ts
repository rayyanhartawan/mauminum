import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Item {
  idItem: string;
  namaItem: string;
  rasa: string;
  size: string;
  harga: string;
  toping: string;
  pemesan: string;
}

@Component({
  selector: 'app-detail-pesanan',
  templateUrl: './detail-pesanan.component.html',
  styleUrls: ['./detail-pesanan.component.scss'],
})
export class DetailPesananComponent implements OnInit {
  userData: any = {};
  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<DetailPesananComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    // Identifikasi pengguna
    this.auth.user.subscribe((res) => {
      this.userData = res;
    });
  }
}
