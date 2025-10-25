const { contextBridge } = require('electron');
console.log(process.pid,process.argv,process)
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  versions: process.versions,
  processId: process.pid,
  arch: process.arch, // This will show the architecture
  is64Bit: process.arch === 'x64' || process.arch === 'arm64' // Simple check for 64-bit
});