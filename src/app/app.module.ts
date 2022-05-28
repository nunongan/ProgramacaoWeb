import { HomeComponent } from './component/home/home.component';
import { DialogService } from 'primeng/dynamicdialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule,MatDialogRef  } from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { CompanyModalComponent } from './component/company-modal/company-modal.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

// PrimeNG imports
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { ParticlesComponent } from './component/particles/particles.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { VideoBgComponent } from './component/video-bg/video-bg.component';
import { MessageService } from 'primeng/api';
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyModalComponent,
    LoginComponent,
    RegisterComponent,
    ParticlesComponent,
    NavbarComponent,
    FooterComponent,
    VideoBgComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    ToastModule,
    InputTextModule,
    AccordionModule,
    PanelModule,
    MatDialogModule,
    MatDialogModule,
    NgParticlesModule
  ],
  providers: [MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
