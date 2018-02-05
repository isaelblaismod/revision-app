import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

/* Custom component */
import { PeopleComponentComponent } from './people-component/people-component.component'
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'people', component: PeopleComponentComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PeopleComponentComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
