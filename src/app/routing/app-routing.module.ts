import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MountainListComponent } from '../mountain/mountain-list/mountain-list.component';
import { VideoComponent } from '../video/video.component';
import { NlclublistComponent } from '../nlclub/nlclublist/nlclublist.component';
import { NlclubitemComponent } from '../nlclub/nlclubitem/nlclubitem.component';
import { NlclubsiteComponent } from '../nlclub/nlclubsite/nlclubsite.component';


const routes: Routes = [
  { path: 'ng', component: NghomeComponent },
  { path: '', component: DashboardComponent },
  { path: 'hw', component: HelloworldComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ml', component: MountainListComponent },
  { path: 'ml/:id', component: MountainListComponent },
  { path: 'video', component: VideoComponent},
  { path: 'nlclubs', component: NlclublistComponent },
  { path: 'nlclubs/:nl_id', component: NlclubsiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
