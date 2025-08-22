import { PrismaClient } from '@prisma/client';

// This is a global variable that holds the PrismaClient instance.
// We use the global object to avoid creating multiple instances
// in development mode, where Next.js's hot-reloading can cause this issue.
const prisma = new PrismaClient();

// Check if we are in production.
// If not, we use the global variable to store the single instance of PrismaClient.
// This prevents multiple connections during hot-reloading.
if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = prisma;
  }
}

// Export the PrismaClient instance.
export default prisma;