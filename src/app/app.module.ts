import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularOnlyComponent } from 'app/dashboard/angularOnly/angular-only.component';
import { LoginComponent } from 'app/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './dashboard/angularOnly/a/a.component';
import { BComponent } from './dashboard/angularOnly/b/b.component';
import { ContainerComponent } from './dashboard/angularOnly/container/container.component';
import { CounterComponent } from './dashboard/angularOnly/counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { MaterialModule } from './material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { AppEffects } from './store/app.effects';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AngularOnlyComponent,
    UserListComponent,
    LoadingComponent,
    ProfileComponent,
    AComponent,
    BComponent,
    ContainerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ appState: appReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
