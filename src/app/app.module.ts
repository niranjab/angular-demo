import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { WidgetModule } from './widgets/widgets.module';
import { BMIComponent } from './BMICalculator/bmi.component'
import { LoginComponent } from './accounts/components/login/login.component'
import { AccountsModule} from './accounts/accounts.module'

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    BMIComponent
    
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent,BMIComponent,LoginComponent,OutputComponent]
})
export class AppModule { }
