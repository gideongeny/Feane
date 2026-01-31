# Deploying Feane to Vercel 🚀

Since your project is already on GitHub, deploying to Vercel is extremely easy. Vercel is the creators of Next.js and has first-class support for Vite + React apps.

## Option 1: One-Click Import (Recommended)

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2.  **Add New Project**:
    *   Click the **"Add New..."** button on your dashboard.
    *   Select **"Project"**.
3.  **Import Git Repository**:
    *   You should see your `Feane` repository in the list (since you are logged in with GitHub).
    *   Click **"Import"** next to `Feane`.
4.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect `Vite`. If not, select `Vite` from the dropdown.
    *   **Root Directory**: Leave as `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
    *   **Environment Variables**: You don't have any yet, so skip this.
5.  **Deploy**:
    *   Click **"Deploy"**.

Vercel will build your site and give you a live URL (e.g., `feane-luxury.vercel.app`) in about a minute!

## Option 2: Deploy from Terminal (Vercel CLI)

If you prefer using the command line:

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```
2.  **Login**:
    ```bash
    vercel login
    ```
3.  **Deploy**:
    ```bash
    vercel
    ```
    *   Follow the prompts (accept defaults).

## Important: Client-Side Routing
I have added a `vercel.json` file to your repository. This file ensures that when a user refreshes a page like `/menu`, Vercel knows to serve the React app (`index.html`) instead of looking for a `menu.html` file that doesn't exist. This prevents "404 Not Found" errors on refresh.
