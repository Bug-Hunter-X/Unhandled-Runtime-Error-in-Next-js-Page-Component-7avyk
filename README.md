# Unhandled Runtime Error in Next.js Page Component

This repository demonstrates a common error in Next.js applications: unhandled runtime errors within page components.  The `about.js` file attempts to access a variable that is not defined, leading to a runtime error. The solution shows how to gracefully handle these issues using error boundaries or conditional rendering.

## Bug

The `about.js` file attempts to access `somethingUndefined`, which is not defined, causing a runtime error.

## Solution

The `aboutSolution.js` file presents a solution where a conditional check ensures that the `nonExistentVariable` is defined before being accessed. This prevents the runtime error.  This solution is far less disruptive and preserves the integrity of your application.
