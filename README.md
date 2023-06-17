# html5-api-DesArrolladoras
Este repositorio contiene el código fuente de un reproductor de video que carga y reproduce un archivo de video local utilizando las opciones permitidas por el API Media Source. Fue desarrollado como parte del ejercicio de laboratorio del curso "Desarrollo Full-Stack (Nivel 3) ED.2022" del programa Samsung DesArrolladoras.

### Características
El reproductor de video incluye las siguientes características:

- Se muestra un mensaje de aviso al usuario mientras el video se está cargando, ya que la operación puede demorarse unos minutos.
- En la parte inferior del video se encuentra una botonera con las siguientes opciones:
- Botón de inicio/reproducción del video.
- Botón de parada/pausa del video.
- Control deslizante para subir y bajar el volumen.


### Validaciones
El reproductor de video realiza las siguientes validaciones:

- Solo se pueden cargar archivos de video del tipo correcto. Se controla para evitar la carga de archivos que no sean compatibles.
- Se manejan los errores de carga de archivos incorrectos o incompatibles.

### Archivos y directorios
El repositorio está estructurado de la siguiente manera:

- **index.html**: Archivo HTML que contiene la estructura del reproductor de video.
- **style.css**: Archivo CSS que define los estilos del reproductor de video y la botonera.
- **script.js**: Archivo JavaScript que contiene la lógica de carga y reproducción del video, así como el control de la botonera.

### Uso
- Clona este repositorio en tu máquina local: `git clone https://github.com/CrisCorreaS/html5-api-DesArrolladoras.git`
- Abre el archivo index.html en tu navegador web.
- Haz clic en el botón de carga de video y selecciona un archivo de video válido.
- Mientras el video se carga, se mostrará un mensaje de aviso al usuario.
- Una vez cargado el video, puedes utilizar los botones de inicio/reproducción, parada/pausa y el control de volumen para controlar la reproducción del video.

### Contribuciones
Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna mejora que sugieras, puedes abrir un issue o enviar una solicitud de pull.
