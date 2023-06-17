const isAPISupported = () => {
  return window.File && window.FileReader && window.FileList && window.Blob;
}

const handleFileSelect = (event) => {
  const selectedFile = event.target.files[0];

  if (!selectedFile.type.match('video.*')) {
    alert('Selecciona un archivo de video');
    return;
  }

  const reader = new FileReader();

  reader.onload = ((file) => {
    return (e) => {
      const videoContainer = document.querySelector('.video-container');

      if (videoContainer) {
        videoContainer.parentNode.removeChild(videoContainer);
      }

      const div = document.createElement('div');
      div.id = 'video-div';
      div.className = 'video-container';
      div.innerHTML = `<video controls id="video" class="thumb" src="${e.target.result}" title="${escape(file.name)}"/>`;

      document.getElementById('video-output').insertBefore(div, null);

      const loadingMessage = document.createElement('p');

      loadingMessage.id = 'loading';
      loadingMessage.className = 'loading-message';
      loadingMessage.innerHTML = 'El video se está cargando';

      document.getElementById('video-output').insertBefore(loadingMessage, null);

      const playButton = document.getElementById('play');
      const pauseButton = document.getElementById('pause');
      const volumeUpButton = document.getElementById('up');
      const volumeDownButton = document.getElementById('down');

      playButton.addEventListener('click', () => {
        document.getElementById('video').play();
      });

      pauseButton.addEventListener('click', () => {
        document.getElementById('video').pause();
      });

      volumeUpButton.addEventListener('click', () => {
        document.getElementById('video').volume += 0.1;
      });

      volumeDownButton.addEventListener('click', () => {
        document.getElementById('video').volume -= 0.1;
      });

      document.getElementById('video').addEventListener('canplay', () => {
        const loadingMessage = document.getElementById('loading');

        document.getElementById('video-output').removeChild(loadingMessage);

        document.getElementById('video').style.visibility = 'visible';

        playButton.style.visibility = 'visible';
        pauseButton.style.visibility = 'visible';
        volumeUpButton.style.visibility = 'visible';
        volumeDownButton.style.visibility = 'visible';
      });
    }
  })(selectedFile);

  reader.readAsDataURL(selectedFile);
};

if (isAPISupported()) {
  alert('Todas las API\'s están soportadas correctamente por el navegador');
} else {
  alert('La API no está soportada por este navegador, prueba con Google Chrome');
}

document.getElementById('file').addEventListener('change', handleFileSelect, false);
