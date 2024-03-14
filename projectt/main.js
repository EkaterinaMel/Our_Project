const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('fs');

var res_dir= process.cwd();

function handleSetTitle (event, title) {
	if (title == "get_res_dir"){
		return res_dir;
	}
  title = title.slice(7);
  title = title+'\n'+'\n';
  fs.appendFile(res_dir+'/'+'result.txt', title, (err) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
  });
  return res_dir;
}

let settings = {
    'renderer': {
        'key1': 'value1',
        'key2': 'value2'
    }
}

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({
  	properties: ['openDirectory']
  })
  if (!canceled) {
  	console.log('handleFileOpen')
  	res_dir = filePaths[0]
    return filePaths[0]
  }
}

function createWindow () {
	const win = new BrowserWindow({
		width: 1100,
		height: 700,
		resizable: false,
		webPreferences: {
			webSecurity: false,
			preload: path.join(__dirname, 'preload.js')
		}
	});



/*
	ipcMain.handle('create-file', (req, data) => {
		if (!data || !data.title || !data.content) return false;

		const filePath = path.join(__dirname, 'notes', `${data.title}.txt`);
		fs.writeFileSync(filePath, data.content);

		return { success: true, filePath };
	})*/

	win.loadFile('src/index.html')
		.then(() => { win.webContents.send('sendSettings', settings.renderer); })
        .then(() => { win.show(); });
	win.setMenu(null)
	//win.webContents.openDevTools()
}

app.whenReady().then(() => {
  ipcMain.handle('set-title', handleSetTitle)
  ipcMain.handle('dialog:openDirectory', handleFileOpen)
  createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
})




