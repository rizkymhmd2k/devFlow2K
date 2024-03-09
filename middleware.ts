import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = [
  '/',
  '/api/webhook',
  '/questions/:id',
  '/tags',
  '/tags/:id',
  '/profile/:id',
  '/community',
  '/jobs',
  '/ask-question',
  '/collection'
];

const ignoredRoutes = [
  '/api/webhook', 
  '/api/chatgpt'
];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Add console logs for debugging
console.log("Auth middleware configured.");
console.log("Public routes:", publicRoutes);
console.log("Ignored routes:", ignoredRoutes);
