// processo principal do electron

const { app, BrowserWindow } = require("electron")

let mainWindow

app.on('ready', () => {

    // config
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        resizable: false
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

})

// using windows and linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })