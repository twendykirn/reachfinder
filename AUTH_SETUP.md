# Authentication Setup Guide

This project uses **Better Auth** with **Convex** as the database adapter for authentication.

## Features

- ✅ Email/Password authentication
- ✅ Protected dashboard routes (`/dashboard/*`)
- ✅ Automatic redirect to `/dashboard` after login
- ✅ Session management with Better Auth
- ✅ Convex integration for real-time data
- ✅ Resend email integration (ready to configure)
- ✅ Polar SDK installed (ready to use)

## Setup Instructions

### 1. Install Dependencies

Dependencies are already installed:
- `better-auth@1.3.34`
- `@convex-dev/better-auth`
- `resend`
- `@polar-sh/sdk`

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

Required variables:

```bash
# Convex
VITE_CONVEX_URL=https://your-deployment.convex.cloud
VITE_CONVEX_SITE_URL=https://your-deployment.convex.site
CONVEX_DEPLOYMENT=your-deployment-id

# Better Auth Secret (generate with: openssl rand -base64 32)
BETTER_AUTH_SECRET=your-secret-here
SITE_URL=http://localhost:3000

# Optional: Resend for email
RESEND_API_KEY=your-resend-api-key

# Optional: Polar
POLAR_ACCESS_TOKEN=your-polar-token
```

### 3. Deploy Convex Schema

The Convex component will automatically create the necessary database tables. Deploy your Convex functions:

```bash
npx convex dev
```

Then in another terminal, set the required environment variables on your Convex deployment:

```bash
npx convex env set BETTER_AUTH_SECRET "$(openssl rand -base64 32)"
npx convex env set SITE_URL "http://localhost:3000"
npx convex env set CONVEX_SITE_URL "https://your-deployment.convex.site"
```

For production, update the `SITE_URL` to your production domain.

### 4. Start Development Server

```bash
pnpm dev
```

## File Structure

### Convex Backend

- `convex/convex.config.ts` - Convex app configuration with Better Auth component
- `convex/auth.config.ts` - Auth provider configuration
- `convex/auth.ts` - Better Auth instance and queries
- `convex/http.ts` - HTTP routes for authentication

### Frontend

- `src/lib/auth-client.ts` - Better Auth client configuration
- `src/routes/sign-in.tsx` - Sign in page
- `src/routes/sign-up.tsx` - Sign up page
- `src/routes/dashboard.tsx` - Protected dashboard layout
- `src/routes/dashboard/index.tsx` - Dashboard home page
- `src/routes/api/auth/$.ts` - Auth API route handler
- `src/components/Header.tsx` - Navigation with auth state

## Routes

### Public Routes
- `/` - Home page
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page

### Protected Routes
All routes under `/dashboard/*` are automatically protected:
- `/dashboard` - Dashboard home (requires authentication)

## How It Works

### Authentication Flow

1. **Sign Up**: Users create an account via `/sign-up`
   - Email and password are validated
   - Account is created in Convex via Better Auth
   - User is automatically signed in and redirected to `/dashboard`

2. **Sign In**: Users log in via `/sign-in`
   - Credentials are validated
   - Session is created
   - User is redirected to `/dashboard`

3. **Protected Routes**: Dashboard routes check authentication
   - `useSession()` hook checks for active session
   - Unauthenticated users are redirected to `/sign-in`
   - Authenticated users can access dashboard

4. **Sign Out**: Users can sign out from the dashboard header
   - Session is cleared
   - User is redirected to `/sign-in`

### Key Components

#### Auth Client (`src/lib/auth-client.ts`)
```typescript
export const { signIn, signUp, signOut, useSession } = authClient;
```

- `signIn` - Sign in with email/password
- `signUp` - Create new account
- `signOut` - End session
- `useSession` - React hook for current session

#### Protected Route Pattern
```typescript
const { data: session, isPending } = useSession();

useEffect(() => {
    if (!isPending && !session) {
        navigate({ to: '/sign-in' });
    }
}, [session, isPending, navigate]);
```

## Adding Resend Email

To enable email features (password reset, email verification):

1. Get an API key from [Resend](https://resend.com)
2. Add to `.env.local`: `RESEND_API_KEY=your-key`
3. Configure in `convex/auth.ts`:

```typescript
import { Resend } from 'resend';

export const createAuth = () => {
    return betterAuth({
        database: convex(components.betterAuth),
        emailAndPassword: {
            enabled: true,
            requireEmailVerification: true, // Optional
        },
        plugins: [
            convex(),
            // Add email verification plugin if needed
        ],
    });
};
```

## Using Polar SDK

Polar SDK is installed and ready to use for billing/subscriptions:

```typescript
import { Polar } from '@polar-sh/sdk';

const polar = new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
});
```

## Troubleshooting

### Issue: "Not authenticated" errors
- Ensure Convex is running: `npx convex dev`
- Check environment variables are set correctly
- Verify `BETTER_AUTH_SECRET` is set in Convex dashboard

### Issue: Routes not found
- Regenerate route tree: `pnpm dev` automatically regenerates routes
- Check `src/routes/routeTree.gen.ts` is up to date

### Issue: Session not persisting
- Check browser cookies are enabled
- Verify `SITE_URL` matches your development URL
- Clear browser cache and cookies

## Security Notes

- Store `BETTER_AUTH_SECRET` securely, never commit it
- Use strong passwords (minimum 8 characters enforced)
- HTTPS is required in production
- Convex handles CORS and security automatically

## Next Steps

- Configure email verification with Resend
- Add OAuth providers (Google, GitHub, etc.)
- Implement password reset flow
- Add user profile management
- Set up Polar for billing

## Documentation Links

- [Better Auth Docs](https://www.better-auth.com)
- [Convex + Better Auth Guide](https://convex-better-auth.netlify.app/)
- [Resend Documentation](https://resend.com/docs)
- [Polar SDK](https://docs.polar.sh/)
