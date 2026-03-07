---
name: create-api-service
description: "**WORKFLOW SKILL** — Create a new API service interface in the Nuxt 3 project by generating the required folder structure, index.ts file with service methods, type definition files, and wiring the export in plugins/api/index.ts. USE FOR: adding new API services to the project; setting up service interfaces for backend endpoints. DO NOT USE FOR: modifying existing services; general file creation."
---

# Create API Service

This skill automates the creation of a new API service in the Nuxt 3 project, following the established pattern in `plugins/api/`.

## Workflow Steps

1. **Gather Requirements**

   - Ask the user for the service name (e.g., "user", "product").
   - Ask for the list of methods to implement (e.g., get, create, update, delete). Default to get and create if not specified.
   - Confirm the base API path (default to `"/{serviceName}"`).

2. **Create Service Folder Structure**

   - Create the directory `plugins/api/{serviceName}/`.

3. **Generate Type Files**

   - For each method, create corresponding type files:
     - `get.type.ts`: Define `ServiceNameGetResponse` type.
     - `create.type.ts`: Define `ServiceNameCreatePayload` and `ServiceNameCreateResponse` types.
     - Add other type files as needed (e.g., `update.type.ts`, `delete.type.ts`).

4. **Create Service Index File**

   - Generate `plugins/api/{serviceName}/index.ts` with:
     - Import from type files.
     - Export a function `createServiceNameService` that takes `APIContext` and returns an object with methods.
     - Each method calls `api` with appropriate path and options.

5. **Wire the Export in Main API Plugin**

   - In `plugins/api/index.ts`:
     - Add import: `import createServiceNameService from "~/plugins/api/{serviceName}"`
     - In the `provide` object, add: `{serviceName}: createServiceNameService(_context),`

6. **Validate and Test**
   - Run a build or lint check to ensure no errors.
   - Optionally, suggest adding usage examples or tests.

## Quality Criteria

- All files follow the existing naming conventions (camelCase for service names, PascalCase for types).
- Type definitions are minimal but complete.
- The service integrates seamlessly with the existing API plugin structure.
- No syntax errors or import issues.

## Completion Checks

- Folder and files created successfully.
- Export wired in `plugins/api/index.ts`.
- Project builds without errors.
- Service is accessible via `$service.{serviceName}` in components.
