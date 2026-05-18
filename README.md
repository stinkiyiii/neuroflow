# NeuroFlow — Backend API

API REST para capturar leads, suscripciones al newsletter, mensajes de contacto y métricas de visitas de la landing page de NeuroFlow.

## Stack

| Tecnología | Uso |
|---|---|
| Node.js + Express | Servidor HTTP |
| MongoDB + Mongoose | Base de datos y ODM |
| Helmet | Seguridad en headers HTTP |
| CORS | Control de origen de peticiones |
| express-rate-limit | Limitación de peticiones |
| express-mongo-sanitize | Protección contra NoSQL injection |
| validator | Validación de correos |

---

## Estructura de carpetas

```
backend/
├── src/
│   ├── config/
│   │   └── database.js        ← Conexión a MongoDB
│   ├── controllers/
│   │   ├── leadController.js
│   │   ├── newsletterController.js
│   │   ├── contactController.js
│   │   └── analyticsController.js
│   ├── middleware/
│   │   ├── errorHandler.js    ← Manejo centralizado de errores
│   │   └── rateLimiter.js     ← Rate limiting global y por endpoint
│   ├── models/
│   │   ├── Lead.js
│   │   ├── Newsletter.js
│   │   ├── Contact.js
│   │   └── Visit.js
│   ├── routes/
│   │   ├── leads.js
│   │   ├── newsletter.js
│   │   ├── contact.js
│   │   └── analytics.js
│   ├── utils/
│   │   └── validators.js      ← Helpers de validación y detección de navegador
│   └── app.js                 ← Configuración de Express
├── server.js                  ← Entry point
├── .env.example               ← Variables de entorno (plantilla)
├── api-examples.http          ← Requests de prueba (Thunder Client / REST Client)
└── package.json
```

---

## Instalación

### 1. Clonar o copiar la carpeta `backend/`

```bash
cd neuroflow/backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env`

Copia `.env.example` y rellena los valores:

```bash
cp .env.example .env
```

```env
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster0.xxxxx.mongodb.net/neuroflow?retryWrites=true&w=majority
CORS_ORIGIN=http://localhost:5173
```

> **¿No tienes MongoDB?** Crea una base de datos gratuita en [MongoDB Atlas](https://www.mongodb.com/atlas) y copia la URI de conexión.

### 4. Arrancar el servidor

```bash
# Producción
npm start

# Desarrollo (con recarga automática)
npm run dev
```

Deberías ver:

```
✅  MongoDB conectado
🚀 NeuroFlow API corriendo en http://localhost:3001
   Entorno: development
```

---

## Endpoints

### `GET /api/health`
Verifica que el servidor está vivo.

---

### `POST /api/leads`
Registra un usuario interesado en NeuroFlow.

**Body**
```json
{
  "name": "Ana García",
  "email": "ana@ejemplo.com",
  "userType": "estudiante"
}
```

`userType` acepta: `estudiante` | `profesor` | `institución` | `otro`

**Respuesta 201**
```json
{
  "success": true,
  "message": "¡Gracias por registrarte! Te avisaremos cuando lancemos.",
  "data": { "id": "...", "email": "ana@ejemplo.com", "registeredAt": "..." }
}
```

**Errores posibles**
- `400` — campos faltantes o correo inválido
- `409` — correo ya registrado

---

### `POST /api/newsletter`
Suscribe un correo al newsletter.

**Body**
```json
{ "email": "ana@ejemplo.com" }
```

**Respuesta 201**
```json
{
  "success": true,
  "message": "¡Te has suscrito al newsletter de NeuroFlow!",
  "data": { "id": "...", "email": "...", "subscribedAt": "..." }
}
```

---

### `POST /api/contact`
Envía un mensaje de contacto.

**Body**
```json
{
  "name": "María López",
  "email": "maria@ejemplo.com",
  "message": "Me interesa integrar NeuroFlow en mi universidad."
}
```

**Respuesta 201**
```json
{
  "success": true,
  "message": "Mensaje recibido. Te responderemos pronto.",
  "data": { "id": "...", "sentAt": "..." }
}
```

---

### `POST /api/analytics/visit`
Registra una visita a la landing page.

**Body**
```json
{ "page": "/" }
```

**Respuesta 201**
```json
{
  "success": true,
  "message": "Visita registrada.",
  "data": { "id": "...", "page": "/", "browser": "Chrome", "visitedAt": "..." }
}
```

---

## Probar los endpoints

El archivo `api-examples.http` contiene todos los requests listos para ejecutar.

**Opción 1 — VS Code (REST Client)**
1. Instala la extensión **REST Client** (Huachao Mao)
2. Abre `api-examples.http`
3. Haz clic en `Send Request` sobre cualquier bloque

**Opción 2 — Thunder Client (VS Code)**
1. Instala la extensión **Thunder Client**
2. Importa el archivo `api-examples.http` desde la extensión

**Opción 3 — Postman**
Importa `api-examples.http` usando File → Import → selecciona el archivo.

---

## Cómo conectar el frontend

En cada componente React donde capturas datos (formulario de registro, footer newsletter, etc.), reemplaza el `href` del botón por una llamada `fetch`:

### Ejemplo — Suscripción al newsletter

```jsx
async function handleNewsletterSubmit(email) {
  try {
    const res = await fetch('http://localhost:3001/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    alert(data.message); // "¡Te has suscrito al newsletter de NeuroFlow!"
  } catch (err) {
    alert(err.message);
  }
}
```

### Ejemplo — Registrar visita al cargar la página

```js
// En App.jsx, dentro de useEffect al montar
fetch('http://localhost:3001/api/analytics/visit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ page: window.location.pathname }),
});
```

> En producción, cambia `http://localhost:3001` por la URL de tu servidor desplegado
> y actualiza `CORS_ORIGIN` en el `.env` con tu dominio de producción.

---

## Seguridad implementada

| Medida | Detalle |
|---|---|
| `helmet` | Cabeceras HTTP seguras (XSS, clickjacking, MIME sniff, etc.) |
| `cors` | Solo acepta peticiones del origen configurado en `CORS_ORIGIN` |
| Rate limiting global | 100 peticiones cada 15 minutos por IP |
| Rate limiting por escritura | 10 envíos por hora para leads, newsletter y contacto |
| `express-mongo-sanitize` | Bloquea operadores `$` en el body para prevenir NoSQL injection |
| Validación de email | `validator.isEmail()` en modelo + revisión previa en controller |
| Sanitización de strings | `trim()` y `maxlength` en todos los campos |
| Body limit | Máximo 10 KB por request (`express.json({ limit: '10kb' })`) |
| Error handler centralizado | Nunca expone stack traces en producción |
