/**
 * Zustand Explanation
 * Educational content for the Zustand lab
 */

export const explanation = {
  title: "Zustand",
  subtitle: "Bear-bones state management",

  overview: `
Zustand is a small, fast, and scalable state management solution. 
It has a simple API based on hooks, doesn't require providers, 
and is only about 2KB minified.
  `.trim(),

  keyPoints: [
    {
      title: "Minimal Boilerplate",
      description: "Just create a store and use it - that's it",
      icon: "feather",
    },
    {
      title: "No Providers",
      description: "Works without wrapping your app in context providers",
      icon: "box",
    },
    {
      title: "Hook-based",
      description: "Simple hooks API that feels natural in React",
      icon: "anchor",
    },
    {
      title: "Tiny Bundle",
      description: "Only ~2KB, perfect for performance-conscious apps",
      icon: "zap",
    },
  ],

  codeExamples: {
    store: `// store.ts
import { create } from 'zustand';

interface BearStore {
  bears: number;
  increase: () => void;
  reset: () => void;
}

export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  reset: () => set({ bears: 0 }),
}));`,

    usage: `// Component usage - just import and use!
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <Button onPress={increase} title={\`Bears: \${bears}\`} />
  );
}`,

    selective: `// Selective subscriptions for performance
// Only re-renders when 'bears' changes
const bears = useBearStore((state) => state.bears);

// Only re-renders when 'fish' changes  
const fish = useBearStore((state) => state.fish);

// Shallow comparison for objects
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
);`,

    middleware: `// Middleware support
import { persist, devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        // ...state
      }),
      { name: 'bear-storage' }
    )
  )
);`,
  },

  pros: [
    "Extremely lightweight (~2KB)",
    "No provider/wrapper needed",
    "Simple, intuitive API",
    "Great TypeScript support",
    "Selective re-renders by default",
    "Middleware for persistence, devtools",
  ],

  cons: [
    "Less ecosystem than Redux",
    "No built-in DevTools (needs middleware)",
    "Less opinionated (can be messy)",
    "Smaller community",
  ],

  whenToUse: [
    "Small to medium apps",
    "When bundle size matters",
    "Quick prototyping",
    "When you want minimal setup",
  ],

  whenNotToUse: [
    "Very complex state requirements",
    "When you need extensive DevTools",
    "Enterprise apps needing strict patterns",
  ],

  bundleSize: "~2KB (minified)",

  comparison: {
    vsRedux: "Much simpler and smaller, but less features and tooling.",
    vsContext: "Better performance, no providers, but external dependency.",
  },

  comparisonTable: [
    { metric: "Bundle Size", zustand: "~2KB", redux: "~40KB" },
    { metric: "Boilerplate", zustand: "Minimal", redux: "Moderate" },
    { metric: "Provider", zustand: "Not needed", redux: "Required" },
    { metric: "DevTools", zustand: "Via middleware", redux: "Built-in" },
    { metric: "Learning Curve", zustand: "Low", redux: "Medium" },
  ],
};

export type Explanation = typeof explanation;

