import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-pesanan',
  templateUrl: './delete-pesanan.component.html',
  styleUrls: ['./delete-pesanan.component.scss'],
})
export class DeletePesananComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeletePesananComponent>) {}

  ngOnInit(): void {}

  //Membuat Fungsi Konfirmasi Delete Produk:
  konfirmasiDelete() {
    this.dialogRef.close(true);
  }
}
