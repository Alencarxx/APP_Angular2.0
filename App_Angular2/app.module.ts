
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuPrimeiroComponente } from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [MeuPrimeiroComponente],
    bootstrap: [MeuPrimeiroComponente]
})
export class AppModule { }
