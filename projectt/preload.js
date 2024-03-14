const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.invoke('set-title', title),
  openDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),
  sendSettings: (message) => {
            ipcRenderer.on('sendSettings', message);
        }
})