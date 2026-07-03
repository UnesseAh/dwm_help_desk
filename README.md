# IT Helpdesk Frontend

React, TypeScript, and Vite frontend for the IT Helpdesk application.

## Prerequisites

Install these before starting:

- Node.js LTS
- npm
- The backend API running locally

Check that Node and npm are installed:

```bash
node -v
npm -v
```

## Setup From Scratch

### 1. Install Dependencies

From the frontend folder:

```bash
cd dwm_help_desk
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `dwm_help_desk` folder:

```env
VITE_APP_API_BASE_URL=http://localhost:5000/api
```

Use a different URL only if your backend is running on another port or host.

### 3. Start the Backend

The frontend needs the backend API before login, tickets, services, departments, and comments can work.

In a separate terminal, start the backend from the `dwm_help_desk_bff` folder:

```bash
npm run dev
```

### 4. Start the Frontend

From the `dwm_help_desk` folder:

```bash
npm run dev
```

Vite will print the local URL, usually:

```text
http://localhost:5173/
```

If port `5173` is already in use, Vite will choose another one, for example `http://localhost:5174/`.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the frontend for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Common Issues

### `'vite' is not recognized`

Run:

```bash
npm install
npm run dev
```

This happens when dependencies are not installed yet.

### Backend Requests Fail

Make sure:

- The backend is running.
- The frontend `.env` file has `VITE_APP_API_BASE_URL=http://localhost:5000/api`.
- You restarted the frontend after changing `.env`.
