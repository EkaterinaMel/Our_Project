const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('fs');

var res_dir='.'

function handleSetTitle (event, title) {
  if (title.split(" ")[0] == "setting"){

  	res_dir=title.split(" ")[1]
  	console.log(title)
  	return
  }
  title = title.slice(7);
  title = title+'\n'+'\n';
  fs.appendFile(res_dir+'/'+'result.txt', title, (err) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  console.log('String added to result.txt successfully!');
  });
}

function createWindow () {
	const win = new BrowserWindow({
		width: 1100,
		height: 700,
		resizable: false,
		webPreferences: {
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

	win.loadFile('src/index.html');
	win.setMenu(null)
	win.webContents.openDevTools()
}

app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle)
  createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
})




