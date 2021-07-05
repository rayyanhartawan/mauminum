import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

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
  selector: 'app-tambah-pesanan',
  templateUrl: './tambah-pesanan.component.html',
  styleUrls: ['./tambah-pesanan.component.scss'],
})
export class TambahPesananComponent implements OnInit {
  userData: any = {};
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  user: any = {};
  constructor(
    public dialogRef: MatDialogRef<TambahPesananComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((res) => {
      this.userData = res;
    });
  }

  // fungsi untuk menyimpan data
  simpan() {
    if (this.data.id == undefined) {
      //mengambil data date lalu diubah ke string
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;
      this.afs
        // menyimpan data ke koleksi minums
        .collection('minums')
        // menjadikan data waktu tadi menjadi id document
        .doc(doc)
        .set(this.data)
        .then((res) => {
          this.snackbar.open(
            'Selamat pesanan anda berhasil ditambahkan!',
            'close',
            {
              verticalPosition: this.verticalPosition,
            }
          );
        })
        .catch((err) => {
          this.snackbar.open('Pesanan tidak dapat dibuat', 'close', {
            verticalPosition: this.verticalPosition,
          });
          console.log(err);
        });
    } else {
      // mengambil data waktu lalu menjadikanya string
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;
      this.afs
        .collection('minums')
        .doc(this.data.id)
        .update(this.data)
        .then((res) => {
          this.snackbar.open('Pesanan berhasil diubah!', 'close', {
            verticalPosition: this.verticalPosition,
          });
        })
        .catch((err) => {
          console.log(err);
          this.snackbar.open('Pesanan gagal diubah!', 'close', {
            verticalPosition: this.verticalPosition,
          });
        });
    }
  }
}
