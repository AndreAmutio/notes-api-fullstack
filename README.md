
# 📕 README 📕

# Notes App – Full Stack Exercise

Aplicación web full stack desarrollada para diseñar e implementar un sistema completo de gestión de notas de extremo a extremo.
El proyecto es una Single Page Application (SPA) que permite crear, editar, archivar, desarchivar y eliminar notas, con persistencia de datos en una base de datos relacional mediante una arquitectura backend en capas y una API REST.
---

## Tecnologias utilizadas 🛠️

### Frontend
- HTML5
- CSS3
- Bulma CSS
- Google Fonts
- Vanilla JavaScript
- Arquitectura SPA
- Fetch API

### Backend
- Node.js → Entorno de ejecución JavaScript del lado del servidor
- Express.js → Framework web para rutas y middleware
- Sequelize (ORM) → Capa de abstracción de base de datos
- SQLite → Motor de base de datos relacional liviano
- Arquitectura en Capas (Controllers, Services, Repositories) → Separación de responsabilidades

---
## Estructura del proyecto 📂

  ### Estructura frontend
  - `index.html` --> Punto de entrada principal de la SPA.
  - `css/style.css` --> Estilos personalizados y overrides de Bulma.
  - `js/app.js` --> Lógica principal de la aplicación (renderizado, eventos, llamadas API).

  ### Backend
  - `src/controllers/` --> Manejo de requests y responses HTTP.
  - `src/services/` --> Lógica de negocio.
  - `src/repositories/` --> Acceso a base de datos.
  - `src/models/`--> Modelos Sequelize (esquema de BD).
  - `src/routes/` --> Endpoints y ruteo de la API.
  - `index.js` -->Punto de entrada del servidor backend.
  - `package.json` --> Dependencias y scripts.
  
  ### Archivos de raiz
  - `run.sh` --> Script para instalar dependencias e iniciar el backend.
  - `README.md` --> Documentación del proyecto.

---

## Requerimientos ⚙️

- Node.js v18+
- npm v9+
- Git
---

## Como ejecutar la aplicación 🏃🏼‍➡️

 ### 1 Clonar el repositorio
   git clone <private-repository-url>
   cd notes-app

 ### 2 Ejecutar con el script automático
  El directorio raíz incluye un script run.sh que automatiza la instalación de dependencias e inicia el servidor backend, simplificando el proceso de configuración del entorno.

 **En Linux o macOS:**
  - `chmod +x run.sh`
  - `./run.sh`

 **Windows (usando Git Bash):**
   - sh run.sh

### Instalacion manual alternativa

1. **Ir al backend:** `cd backend`
2. **Instalar dependencias:** `npm install`
3. **Iniciar el servidor:** `npm start`

## Acceso a la aplicación
- Backend API: http://localhost:3001
- Frontend: Abrir `frontend/index.html` en el navegador (doble clic al archivo o usando la extensión Live Server de VS Code).

---

## Funcionalidades (Historias de Usuario)

### Parte 1

- Crear notas
- Editar notas
- Eliminar notas
- Archivar notas
- Desarchivar notas
- Listar notas activas
- Listar notas archivadas

## API REST – Endpoints Principales 🌀

- GET /notes → Obtener notas activas
- GET /notes/archived → Obtener notas archivadas
- POST /notes → Crear una nota
- PUT /notes/:id → Actualizar una nota
- PATCH /notes/:id/archive → Archivar o desarchivar una nota
- DELETE /notes/:id → Eliminar una nota
---

## Detalle de Arquitectura 🟡

###  Frontend
El frontend es una Single Page Application (SPA) estática construida con HTML5, CSS3 (Bulma) y JavaScript Vanilla.
*   **Interfaz dinámica:** Se actualiza mediante manipulación del DOM sin recargar la página.
*   **Interaccion con la API:** Utiliza la Fetch API para comunicarse con el backend en Node.js..

###  Backend
El backend sigue un patrón de Arquitectura en Capas para asegurar la separación de responsabilidades:
*   **Controllers:** Manejan las solicitudes HTTP y validan los datos de entrada.
*   **Services:** Contienen la lógica de negocio principal.
*   **Repositories:** Gestionan el acceso y la abstracción de la base de datos mediante Sequelize ORM.

**Database:** Los datos se almacenan en una base de datos relacional SQLite local, que no requiere configuración adicional para su evaluación.

---

## Versión en Producción
> [!IMPORTANT]  
> Esta aplicación actualmente **no está deployada**.  
> Está diseñada para ejecutarse de forma local siguiendo las instrucciones indicadas en la sección **"Como ejecutar la aplicacion"**.


## Final Notes 🚩
- La aplicación está estructurada como una Single Page Application (SPA) con una separación clara entre frontend y backend.

- La persistencia de datos se gestiona mediante una base de datos relacional usando Sequelize ORM.

- La implementación prioriza la claridad, simplicidad.