import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook',
    'question/:id',
    '/tags',
    '/tags/:id',
    '/profile',
    '/profile/*', // Include the wildcard route for dynamic profiles
    '/community',
    '/jobs'
  ],
  ignoredRoutes: [
    '/api/webhook',
    '/api/chatgpt',
    '/profile' // Add '/profile' to ignoredRoutes temporarily
  ]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
