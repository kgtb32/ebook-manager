import { Injectable } from '@angular/core';
import { Command } from '@tauri-apps/api/shell';

@Injectable({
  providedIn: 'root'
})
export class SidecarService {
  private readonly backendSidecar = "bin/build/backend"
  command?: Command

  serviceLoaded: boolean = true
  err?: string

  constructor() {
    //this.command = Command.sidecar(this.backendSidecar);
    //this.command.execute().then(() => {
    //  this.serviceLoaded = true
    //}).catch(err => this.err = err);
  }
}
