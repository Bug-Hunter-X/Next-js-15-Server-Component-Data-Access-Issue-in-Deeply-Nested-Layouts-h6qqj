# Next.js 15 Server Component Data Access Issue in Deeply Nested Layouts

This repository demonstrates a subtle bug in Next.js 15 related to data access in deeply nested layouts when using server components.  The problem arises when a child component attempts to access data fetched by a parent component's `getStaticProps` or `getServerSideProps` functions. Due to asynchronous data fetching, the child component might not receive the data correctly, leading to runtime errors or unexpected behavior.  The solution involves restructuring data fetching and passing data explicitly to ensure proper access.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console related to undefined data in the nested component.

## Solution

The solution involves restructuring data fetching and passing data explicitly to child components. This ensures data accessibility across the component hierarchy.  See the `bugSolution.js` file for the corrected implementation.