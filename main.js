console.log(" #  *Arquitetura da telas")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 430
  })

  win.loadFile('./views/index.html')
}
// janela reconhecido
const reco = () => {
  const about = new BrowserWindow({
    width:1200,
    height:150,
    autoHideMenuBar:true,
    resizable:false,
    
  })
  about.loadFile('./views/reconhecido.html')
}
app.whenReady().then(() => {
  createWindow()
  reco()
})