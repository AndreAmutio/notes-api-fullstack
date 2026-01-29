#!/bin/bash

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Starting Notes App..."

# Backend
echo "Setting up backend..."
cd "$ROOT_DIR/backend" || exit
npm install
npm run start &

# Frontend (static files)
echo "Starting frontend..."
cd "$ROOT_DIR/frontend" || exit
npx serve . &

echo "Application is running!"
