#!/bin/bash

echo "Starting server"
cd backend && npm run dev &

echo "Start client"
cd ./frontend && npm run dev