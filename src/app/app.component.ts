import { Component } from '@angular/core';
import { SidecarService } from './services/tauri/sidecar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public sidecarService: SidecarService) { }
}
