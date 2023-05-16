# Mecantronic 
Repositorio de la landing page de Mecantronic. Documentación y referencias de despliegue

# Getting started

## 🌱 **Developer mode**
1. Para poder levantar de forma local esta page, descargar el repositorio.
    ```bash
    git clone https://github.com/githubmec/mecantronic-page.git
    cd mecantronic-page
    ```
2. Obtener Node.js.
    ```bash
    sudo apt install npm 
    ```
3. Instalar las dependencias necesarias del proyecto.
    ```bash
    npm i
    ```
4. Levantar la web-page de forma local.
    ```bash
    npm start
    ```

## 👷‍♂️ **Testing mode**
1. Montar un server estático local.
    ```bash
    serve -s build
    ```

## 🚀 **Production mode**
1. Para poder levantar de forma local esta page, descargar el repositorio.
    ```bash
    git clone https://github.com/githubmec/mecantronic-page.git
    cd mecantronic-page
    ```
2. Modificar en el archivo `package.json`, el domínio de web.
    ```bash
    "homepage": "https://test-mecpage.com/",
    ```
3. Crear el build de la web.
    ```bash
    npm run build
    ```
4. La carpeta `/build` tiene una versión optimizada de la web para desplegar en el hosting.

# Dominio
[mecantronic.com.ar](www.mecantronic.com.ar) adquirido en [nic.ar](https://nic.ar/es/ayuda/instructivos/registro-de-dominio). 

# Hosting
La web esta hosteada en [Hostinger](https://www.hostinger.com.ar/).