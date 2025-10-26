document.addEventListener('DOMContentLoaded', () => {
  const infoDiv = document.getElementById('app-info');
  document.title = document.title + " "+ (window.electronAPI?.is64Bit ? '64-bit' : '32-bit')
  infoDiv.innerHTML = `
    <h2>Electron Application ${window.electronAPI?.arch || 'N/A'} (${window.electronAPI?.is64Bit ? '64-bit' : '32-bit'})</h2>
    <p>Built with Electron ${window.electronAPI?.versions?.electron || '36.5.0'}</p>
    <p>Platform: ${window.electronAPI?.platform || 'win32'}</p>
    <p>Chromium: ${window.electronAPI?.versions?.chrome || 'N/A'}</p>
  `;
});
