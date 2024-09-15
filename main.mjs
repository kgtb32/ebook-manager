import { app, BrowserWindow } from 'electron'

function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 800 });
    win.loadFile('dist/ebook-manager/browser/index.html');
}

app.whenReady().then(() => {
    createWindow()
})