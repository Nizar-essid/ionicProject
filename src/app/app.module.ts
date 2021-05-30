import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import{ProfilePage} from'../pages/profile/profile';
import{SettingsPage} from'../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{SingleAnnoncePage} from '../pages/single-annonce/single-annonce'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{AjoutPage} from'../pages/ajout/ajout'
import { SQLite} from '@ionic-native/sqlite';
import { AuthentificationProvider } from '../providers/authentification/authentification';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,AjoutPage,
    HomePage,
    ProfilePage,
    SettingsPage,SingleAnnoncePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,AjoutPage,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    SettingsPage,SingleAnnoncePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    AuthentificationProvider,
    AuthentificationProvider,
    AuthentificationProvider
  ]
})
export class AppModule {}
