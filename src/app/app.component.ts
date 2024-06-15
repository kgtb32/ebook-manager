import { Component } from '@angular/core';
import { SidecarService } from './services/tauri/sidecar.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public sidecarService: SidecarService, private primengConfig: PrimeNGConfig) {
    primengConfig.ripple = true
  }
}
