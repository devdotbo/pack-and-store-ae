# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.5 project for PackAndStore.AE, a packing and storage service website. The project uses:
- TypeScript with strict mode
- Next.js App Router
- Tailwind CSS v4 with CSS variables
- shadcn/ui component system (New York style)
- pnpm as the package manager

## Essential Commands

### Development
```bash
# Start development server with Turbopack
./dev-server.sh

# Stop development server
./dev-server.sh --kill

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

**Important**: Always use `./dev-server.sh` instead of `pnpm dev` to start the development server. This script:
- Automatically kills any existing dev server before starting
- Logs all output to `dev-server.log` for easy error debugging
- Runs the server in the background as a service
- Provides clear status messages during startup

### Component Management
```bash
# Add a new shadcn/ui component
pnpm dlx shadcn@latest add [component-name]

# Example: Add button component
pnpm dlx shadcn@latest add button
```

### Testing
No test framework is currently configured. When tests are added, update this section.

## Architecture Overview

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font and metadata
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles with Tailwind imports
  
- `/components` - React components (to be created)
  - `/ui` - shadcn/ui components will be installed here
  
- `/lib` - Utility functions and shared code
  - `utils.ts` - Contains `cn()` function for className merging

- `/public` - Static assets (SVG icons)

### Key Technologies
1. **Routing**: Next.js App Router with file-based routing
2. **Styling**: Tailwind CSS v4 with PostCSS, tw-animate-css for animations
3. **Components**: shadcn/ui with Lucide React icons
4. **Type Safety**: TypeScript with strict mode enabled
5. **State Management**: Not yet implemented

### Important Configuration Files
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript settings with path aliases (@/ prefix)
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration (when created)

### Path Aliases
- `@/` - Maps to the project root
- `@/components` - Component directory
- `@/lib` - Library/utilities directory
- `@/hooks` - Custom React hooks (to be created)

## Development Guidelines

1. **Component Development**: Use shadcn/ui components as the foundation. Install components as needed rather than creating from scratch.

2. **Styling**: Use Tailwind CSS utility classes. The `cn()` utility from `/lib/utils.ts` should be used for conditional className merging.

3. **TypeScript**: Maintain strict type safety. All new code should be properly typed.

4. **File Organization**: Follow Next.js App Router conventions. Page components go in `/app`, reusable components in `/components`.

## Error Checking and Build Verification

**IMPORTANT**: Regularly check for build errors to ensure code quality and catch issues early.

### When to Run Build Checks
1. **After completing any task** - Always run a build check after implementing features or fixes
2. **When encountering errors** - If the dev server shows errors, check build output for detailed information
3. **Before committing changes** - Ensure code builds successfully before committing

### Build Verification Process
```bash
# Step 1: Stop the dev server first (required)
./dev-server.sh --kill

# Step 2: Run the production build
pnpm build

# Step 3: If build succeeds, restart dev server
./dev-server.sh
```

### Error Debugging
- **Dev server logs**: Check `dev-server.log` in the project root for runtime errors
- **Build errors**: The `pnpm build` command will show TypeScript and build-time errors
- **First place to check**: Always examine `dev-server.log` when debugging issues

### Log File Location
- **Development logs**: `./dev-server.log` (in project root)
- This file contains all console output from the dev server
- Use `tail -f dev-server.log` to watch logs in real-time

## Git Commit Guidelines

**IMPORTANT**: Commit changes after every meaningful step. This ensures:
- Clear history of changes
- Easy rollback if needed
- Better collaboration and code review

### Commit Strategy
```bash
# After each logical change
git add .
git commit -m "descriptive message"

# Examples:
git commit -m "add button component"
git commit -m "implement user authentication"
git commit -m "fix navigation responsive issues"
```

Commit after:
- Adding new components
- Implementing features
- Fixing bugs
- Updating configurations
- Refactoring code

## Current Project State

The project is in initial setup phase with:
- Basic Next.js structure created
- Tailwind CSS and shadcn/ui configured
- No business logic implemented yet
- Clean git repository on main branch