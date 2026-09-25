<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

USe the proper folder strucutre and file for the entire project 

I PREFER THE BELOW KIND OF PROJECT STRUCTURE :-

1.Overview of an Ideal Next.js Folder Structure

/my-nextjs-app
├── public/
├── src/
│ ├── app/
│ │ ├── [locale]/
│ │ ├── auth/
│ │ ├── blog/
│ │ ├── checkout/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── api/
│ │ ├── styles/
│ │ ├── utils/
│ │ ├── middleware.ts
│ ├── lib/
│ ├── modules/
│ ├── i18n/
└── package.json

2. Key Folder Breakdown
public/ - Static Assets
Stores images, fonts, and other static files accessible from the root URL (/).
Next.js automatically serves files from here.
src/ - Main Application Code
Using src/ keeps the project root clean and organizes the application’s core logic.

app/ - The Core Next.js 13+ Folder

With the App Router introduced in Next.js 13, this folder replaces the traditional pages/ directory for file-based routing.

[locale]/: Supports internationalization (i18n) with dynamic locale handling.
auth/: Contains authentication-related pages and logic.
blog/: Handles blog-related pages.
checkout/: Includes checkout-related pages and components.
services/: Organizes business logic and API calls separately from UI components.
api/: For API routes, replacing the older pages/api/ directory.
lib/ - Utilities and Configurations

Stores reusable utility functions, constants, and configuration files.
Examples: API clients, helper functions, and environment configuration.
i18n/ - Internationalization
Contains translation files for multi-language support.
styles/ - Global Styles

Stores Tailwind, SCSS, or other styling frameworks for global use.
Understanding the modules/ Directory in Next.js
The modules/ directory in this Next.js project follows a feature-based architecture, meaning each module encapsulates its own logic, components, and utilities. This structure enhances maintainability, scalability, and reusability.

3. What Are Modules?
Modules in this context are self-contained feature groups that encapsulate related logic, making it easier to scale large applications. Each module typically consists of:

Components: UI elements specific to the module.
Constants: Fixed values used within the module.
Hooks: Custom React hooks specific to this feature.
Services: API requests and business logic related to the module.
Store: State management logic (if using Redux, Zustand, or another store).
Types: TypeScript interfaces and types for the module.
Utils: Utility functions that help with common operations.
Example of a Core Module (core/)
core/
├── components/ # Shared UI components
├── configs/ # Global configurations
├── constants/ # App-wide constant values
├── context/ # Global React contexts (e.g., auth, theme)
├── hooks/ # Shared custom hooks
├── icons/ # Global icon components
├── services/ # Shared services (e.g., API clients, authentication)
├── store/ # Shared state management
├── types/ # Global TypeScript types
├── utils/ # Common helper functions

Learn about Medium’s values
This structure ensures that commonly used functionalities are centralized, making them accessible across multiple modules.

Example of a Feature Module (authentication/)
Unlike core/, the authentication/ module is a specific feature module, encapsulating logic related to user authentication.

authentication/
├── components/ # UI elements like LoginForm, SignupForm
├── constants/ # Authentication-related constants
├── hooks/ # Custom authentication hooks (e.g., useAuth)
├── services/ # API calls for login, logout, signup
├── store/ # State management (if required)
├── types/ # TypeScript interfaces for auth data
├── utils/ # Utility functions (e.g., token handling)|

This structure ensures that authentication logic is contained within its module, making it easier to manage and modify without affecting other parts of the project.

Benefits of This Modular Approach
Scalability: Adding new features is easier without affecting existing code.
Maintainability: Code is easier to read, debug, and refactor.
Reusability: Shared logic in core/ prevents duplicate code across modules.
Separation of Concerns: Each module is responsible for its own logic.

2. CODING STANDERS
Follow professional coding principles that are widely used in the IT industry and write higly re-usable and understandable code

3. Design principles
Follow the stich designs exccatly the same via mcp connectors , dont create an custom components use scahdcn components only , do not build any custom components implemts end to end design that were there in the stitch design inlcuding all colors , typiography , designs , fonts etc . Make sure the UI looks exacly the same as the stitch design .

4. Styling 
Use tailwind CSS for styling . Follow the tailwind CSS best practices and write clean and maintainable code.

<!-- END:nextjs-agent-rules -->
