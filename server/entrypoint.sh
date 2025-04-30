#!/bin/sh

echo "📦 Running Prisma migrate deploy..."
npx prisma migrate deploy

echo "✨ Running Prisma generate..."
npx prisma generate

echo "🚀 Starting Node app..."
node dist/src/index.js
