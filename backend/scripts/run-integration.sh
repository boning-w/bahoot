#!/usr/bin/env bash

# Reference: The Ultimate Guide to Testing with Prisma: Integration Testing https://www.prisma.io/blog/testing-series-3-aBUyF8nxAn

# 1. Load in any environment variables from .env so you have access to the database URL.
DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/setenv.sh

# 2. Start your Docker container in detached mode.
docker-compose up -d

# 3. Wait for the database server to become available.
echo '🟡 - Waiting for database to be ready...'
$DIR/wait-for-it.sh "${DATABASE_URL}" -- echo '🟢 - Database is ready!'

# 4. Run a Prisma migration to apply your Prisma schema to the database.
npx prisma migrate dev --name init

# 5. Run your integration tests. As a bonus, you should also be able to run this file with a --ui flag to run Vitest's GUI interface.
if [ "$#" -eq "0" ]; then
    vitest --config ./vitest.config.integration.ts
else
    vitest --config ./vitest.config.integration.ts --ui --coverage.enabled=true
fi
