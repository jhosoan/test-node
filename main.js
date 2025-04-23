console.log(" #  *Arquitetura da telas")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 430
  })

  win.loadFile('./views/index.html')
}

app.whenReady().then(() => {
  createWindow()
})