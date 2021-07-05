import { DeletePesananComponent } from './../delete-pesanan/delete-pesanan.component';
import { DetailPesananComponent } from './../detail-pesanan/detail-pesanan.component';
import { TambahPesananComponent } from './../tambah-pesanan/tambah-pesanan.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-makanan-dan-minuman',
  templateUrl: './makanan-dan-minuman.component.html',
  styleUrls: ['./makanan-dan-minuman.component.scss'],
})
export class MakananDanMinumanComponent implements OnInit {
  pesanan: any = {};
  pesanans: any = [];
  userData: any = {};
  user: any = {};
  idx: any;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public sb: MatSnackBar
  ) {}

  ngOnInit() {
    // indentifikasi user
    this.auth.user.subscribe((user) => {
      this.userData = user;
      this.getPesanan();
    });
  }

  // Mengambil data pesanan user
  getPesanan() {
    this.db
      .collection('minums', (ref) => {
        return ref.where('uid', '==', this.userData.uid);
      })
      .valueChanges({ idField: 'id' })
      .subscribe(
        (res) => {
          console.log(res);
          this.pesanans = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // Menambahkan data
  tambahPesanan(data: any, idx: any) {
    let dialog = this.dialog.open(TambahPesananComponent, {
      width: '450px',
      data: data,
    });
  }

  // Melihat detail pesanan
  detailPesanan(data: any, idx: any) {
    let dialog = this.dialog.open(DetailPesananComponent, {
      width: '450px',
      data: data,
    });

    dialog.afterClosed().subscribe((res) => {
      console.log('card ditutup');
    });
  }

  // Menghapus pesanan
  deletePesanan(pesanans: any, idx: any) {
    const dialogRef = this.dialog.open(DeletePesananComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.db
          .collection('minums')
          .doc(pesanans.id)
          .delete()
          .then((res) => {
            this.sb.open('Pesanan berhasil dihapus', 'close', {
              verticalPosition: this.verticalPosition,
            });
          })
          .catch((err) => {
            this.sb.open(
              'Silahkan coba lagi, Pesanan tidak dapat dihapus',
              'close',
              {
                verticalPosition: this.verticalPosition,
              }
            );
          });
      }
    });
  }
}
