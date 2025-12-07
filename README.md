# React Sample Project

A modern React application built with Vite.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
test-app/
├── src/
│   ├── App.jsx       # Main App component
│   ├── App.css       # App styles
│   ├── main.jsx      # React entry point
│   └── index.css     # Global styles
├── .github/
│   └── workflows/
│       └── docker-deploy.yml  # GitHub Actions CI/CD workflow
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
├── package.json      # Project dependencies
├── Dockerfile        # Docker configuration
├── nginx.conf        # Nginx server configuration
└── .dockerignore     # Docker ignore file
```

## Features

- ⚡️ Fast development with Vite
- ⚛️ React 18 with Hooks
- 🎨 Modern CSS styling
- 🔥 Hot Module Replacement (HMR)
- 🐳 Docker support for containerized deployment
- 🚀 GitHub Actions CI/CD pipeline

## Docker Deployment

### Build Docker Image

```bash
docker build -t test-app .
```

### Run Docker Container

```bash
docker run -d -p 80:80 --name test-app test-app
```

The application will be available at `http://localhost`

### Stop and Remove Container

```bash
docker stop test-app
docker rm test-app
```

## GitHub Actions CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/docker-deploy.yml`) that:

- Automatically builds Docker images on push to main/master branch
- Pushes images to GitHub Container Registry (ghcr.io)
- Supports deployment automation (customize the deploy job as needed)

### Workflow Triggers

- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch
- Manual workflow dispatch

### Container Registry

Images are pushed to: `ghcr.io/<your-username>/<repository-name>`

To pull the image:
```bash
docker pull ghcr.io/<your-username>/<repository-name>:latest
```

### Customizing Deployment

Edit the `deploy` job in `.github/workflows/docker-deploy.yml` to add your deployment steps (e.g., SSH deployment, Kubernetes, cloud platforms, etc.).

