import { Component } from '@angular/core';
import { Command } from '@tauri-apps/api/shell';
import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  greetingMessage = "";
  stdout = ""
  childInfo = ""

  constructor() {
    const command: Command = Command.sidecar("bin/build/backend");
    command.execute().then(cmdOutput => {
      this.stdout = cmdOutput.stdout + cmdOutput.stderr
    }).catch(err => this.stdout = err);
  }

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
