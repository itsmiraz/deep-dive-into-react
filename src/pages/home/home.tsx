import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Topics that will i want to learn

  const data = [
    {
      title: "React Performance Optimization",
      description:
        "Learn how to profile React applications and identify bottlenecks using tools like the React DevTools Profiler. Use memoization techniques (React.memo, useMemo, useCallback) to prevent unnecessary re-renders.",
      link: "/react-performance-optimization",
    },
    {
      title: "Code Splitting and Lazy Loading",
      description:
        "Implement code splitting with React.lazy and Suspense to load components on demand and reduce initial bundle size. Leverage dynamic imports and libraries like react-loadable for enhanced code splitting.",
      link: "/code-splitting-lazy-loading",
    },
    {
      title: "React Concurrent Mode (Experimental)",
      description:
        "Understand the benefits of concurrent rendering and how it enhances user experience by prioritizing updates. Explore features like useTransition and useDeferredValue to defer state updates without blocking the main thread.",
      link: "/react-concurrent-mode",
    },
    {
      title: "React Context and Performance Implications",
      description:
        "Use Context API carefully, as it can lead to unnecessary re-renders. Split contexts to minimize the number of components that subscribe to state changes.",
      link: "/react-context-performance",
    },
    {
      title: "Server-Side Rendering (SSR) with Next.js",
      description:
        "Optimize loading performance and SEO using SSR, especially with frameworks like Next.js. Understand the basics of static and dynamic rendering, ISR (Incremental Static Regeneration), and API routes in Next.js.",
      link: "/server-side-rendering-nextjs",
    },
    {
      title: "State Management with Redux Toolkit and Zustand",
      description:
        "Learn advanced state management techniques using Redux Toolkit, including createAsyncThunk and RTK Query for data fetching. Consider alternative lightweight state managers like Zustand or Jotai for simpler use cases.",
      link: "/state-management-redux-toolkit",
    },
    {
      title: "React Query for Data Fetching and Caching",
      description:
        "Leverage React Query for efficient data fetching, caching, synchronization, and pagination. Learn how to set up background refetching and stale-time to ensure data consistency across your app.",
      link: "/react-query-data-fetching",
    },
    {
      title: "Advanced Hooks (Custom Hooks, useReducer, useLayoutEffect)",
      description:
        "Create custom hooks to encapsulate reusable logic across components. Use useReducer for complex state logic and useLayoutEffect to handle DOM manipulations synchronously.",
      link: "/advanced-hooks",
    },
    {
      title: "Virtualization with react-window or react-virtualized",
      description:
        "Implement list virtualization to improve performance in large data sets by rendering only visible items. Use libraries like react-window or react-virtualized to handle infinite scrolling and optimized lists or grids.",
      link: "/virtualization-react-window",
    },
    {
      title: "Error Boundaries and Error Handling",
      description:
        "Implement error boundaries using componentDidCatch and getDerivedStateFromError to handle rendering errors gracefully. Create fallback UI to prevent your app from breaking due to unexpected errors.",
      link: "/error-boundaries-handling",
    },
    {
      title: "Accessibility (a11y) Best Practices",
      description:
        "Follow accessibility guidelines for keyboard navigation, ARIA roles, and screen readers. Utilize tools like eslint-plugin-jsx-a11y and axe-core to ensure your app meets accessibility standards.",
      link: "/accessibility-best-practices",
    },
    {
      title: "Webpack Optimization Techniques",
      description:
        "Optimize Webpack for faster build times, such as by using code splitting, tree shaking, and defining module aliases. Use plugins like webpack-bundle-analyzer to visualize bundle size and optimize dependencies.",
      link: "/webpack-optimization",
    },
    {
      title: "Testing Strategies (Unit, Integration, E2E Testing)",
      description:
        "Write unit and integration tests using Jest and React Testing Library to ensure component reliability. Use tools like Cypress or Playwright for end-to-end testing, especially for critical flows.",
      link: "/testing-strategies",
    },
    {
      title: "Handling Side Effects with useEffect and Custom Hooks",
      description:
        "Manage side effects properly to prevent memory leaks or redundant API calls. Use custom hooks to encapsulate side effect logic and make your components more focused.",
      link: "/handling-side-effects",
    },
    {
      title: "State Persistence and Synchronization",
      description:
        "Implement localStorage or IndexedDB to persist state between page reloads or sessions. Use libraries like redux-persist for synchronizing global state across sessions.",
      link: "/state-persistence-synchronization",
    },
    {
      title: "Optimizing Context Usage and Avoiding Prop Drilling",
      description:
        "Use context effectively to avoid prop drilling, but optimize context updates to prevent re-renders. Consider using component composition and passing down functions rather than raw data.",
      link: "/optimizing-context",
    },
    {
      title: "TypeScript with React for Type Safety",
      description:
        "Use TypeScript to enforce type safety and prevent runtime errors, especially in larger codebases. Learn TypeScript generics, utility types, and interfaces to create highly reusable and safe React components.",
      link: "/typescript-react",
    },
    {
      title: "Authentication and Authorization",
      description:
        "Implement secure authentication using tokens, and manage user sessions with cookies or local storage. Control access to components and routes based on user roles, permissions, or authentication status.",
      link: "/authentication-authorization",
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Convert your React app into a PWA to improve loading speed, offline capabilities, and user engagement. Implement service workers, caching strategies, and manifest.json for a full PWA setup.",
      link: "/progressive-web-apps",
    },
    {
      title: "Managing CSS at Scale",
      description:
        "Use CSS-in-JS libraries like styled-components or Emotion for component-scoped styling. Explore CSS modules, Tailwind CSS, or CSS variables for scalable and consistent styles across your application.",
      link: "/managing-css-scale",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-center py-10">
        Topics That i Want to learn
      </h1>
      <div className="gap-6 mx-auto place-content-center place-items-center grid max-w-[1200px] grid-cols-1 px-20 md:grid-cols-3 ">
        {data.map((item, i) => (
         <Link to={item.link} className="bg-gray-100  w-full h-full rounded-[10px] p-4 max-w-[650px]" key={i}>
          <div key={i} className="">
            <h2 className="text-lg font-semibold pb-2 leading-[22px]">{item.title}</h2>
            <p className="text-xs text-gray-600 font-medium">{item.description}</p>
          </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
