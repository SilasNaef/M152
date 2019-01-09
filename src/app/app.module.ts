import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { NgModule } from '@angular/core';
import { MatModule } from './mat/mat.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NghomeComponent } from './nghome/nghome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryitemComponent } from './galleryitem/galleryitem.component';
import { MountainListComponent } from './mountain/mountain-list/mountain-list.component';
import { MountainItemComponent } from './mountain/mountain-item/mountain-item.component';
import { VideoComponent } from './video/video.component';
import { NlclubitemComponent } from './nlclub/nlclubitem/nlclubitem.component';
import { NlclublistComponent } from './nlclub/nlclublist/nlclublist.component';
import { NlclubsiteComponent } from './nlclub/nlclubsite/nlclubsite.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    NghomeComponent,
    DashboardComponent,
    NghomeComponent,
    GalleryComponent,
    GalleryitemComponent,
    MountainListComponent,
    MountainItemComponent,
    VideoComponent,
    NlclubitemComponent,
    NlclublistComponent,
    NlclubsiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
