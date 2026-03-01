# Sudhaya Concepts and Designs — Website

Official website for **Sudhaya Concepts and Designs**, a Bengaluru-based manufacturer of custom-built food carts, food vans, and food stalls. The site showcases the company's portfolio through an image gallery pulled from Cloudinary, and provides contact details for prospective clients.

Built with **React + Vite** (frontend) and **Express** (backend).

---

## Project Structure

```
/
├── frontend/   # React + Vite client
└── backend/    # Express API server
```

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

### `backend/.env`

| Variable     | Description                                          |
| ------------ | ---------------------------------------------------- |
| `PORT`       | Port the Express server listens on (default: `5000`) |
| `CLOUD_NAME` | Cloudinary cloud name                                |
| `API_KEY`    | Cloudinary API key                                   |
| `API_SECRET` | Cloudinary API secret                                |

Example:

```env
PORT=5000
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
```

### `frontend/.env`

The frontend proxies API requests to the backend via Vite's dev server (configured in `vite.config.js`). No `.env` is required for local development.

For production builds, set the backend URL if not using a proxy:

| Variable            | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL of the backend API (e.g. `https://your-api.com`) |

Example:

```env
VITE_API_BASE_URL=https://your-api.com
```
