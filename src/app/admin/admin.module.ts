import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ImagesComponent } from './images/images.component';
import { TentangMauMinumComponent } from './tentang-mau-minum/tentang-mau-minum.component';
import { KontakComponent } from './kontak/kontak.component';
import { MakananDanMinumanComponent } from './makanan-dan-minuman/makanan-dan-minuman.component';
import { TambahPesananComponent } from './tambah-pesanan/tambah-pesanan.component';
import { DetailPesananComponent } from './detail-pesanan/detail-pesanan.component';
import { DeletePesananComponent } from './delete-pesanan/delete-pesanan.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'tentang-mau-minum',
        component: TentangMauMinumComponent,
      },
      {
        path: 'makanan-dan-minuman',
        component: MakananDanMinumanComponent,
      },
      {
        path: 'kontak',
        component: KontakComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/tentang-mau-minum',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    FileUploaderComponent,
    TentangMauMinumComponent,
    KontakComponent,
    ImagesComponent,
    MakananDanMinumanComponent,
    TambahPesananComponent,
    DetailPesananComponent,
    DeletePesananComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
  ],
})
export class AdminModule {}
