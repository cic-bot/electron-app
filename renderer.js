document.addEventListener('DOMContentLoaded', () => {
  const infoDiv = document.getElementById('app-info');
  infoDiv.innerHTML = `
    <h2>Electron Application</h2>
    <p>Built with Electron ${window.electronAPI?.versions?.electron || '36.5.0'}</p>
    <p>Platform: ${window.electronAPI?.platform || 'win32'}</p>
    <p>Architecture: ${window.electronAPI?.arch || 'N/A'} (${window.electronAPI?.is64Bit ? '64-bit' : '32-bit'})</p>
    <p>Node.js: ${window.electronAPI?.versions?.node || 'N/A'}</p>
    <p>Chromium: ${window.electronAPI?.versions?.chrome || 'N/A'}</p>
    <p>V8: ${window.electronAPI?.versions?.v8 || 'N/A'}</p>
  `;
});
