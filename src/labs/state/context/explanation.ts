/**
 * Context API Explanation
 * Educational content for the Context lab
 */

export const explanation = {
  title: "React Context API",
  subtitle: "Built-in state management for prop drilling",
  
  overview: `
Context provides a way to pass data through the component tree without 
having to pass props down manually at every level. It's built into React, 
so there's no additional dependencies needed.
  `.trim(),

  keyPoints: [
    {
      title: "Built-in Solution",
      description: "No external libraries needed - comes with React",
      icon: "package",
    },
    {
      title: "Avoid Prop Drilling",
      description: "Share state across deeply nested components",
      icon: "share-2",
    },
    {
      title: "Provider Pattern",
      description: "Wrap components that need access to state",
      icon: "layers",
    },
    {
      title: "useContext Hook",
      description: "Easy access to context values in functional components",
      icon: "anchor",
    },
  ],

  codeExamples: {
    createContext: `// 1. Create the Context
const ThemeContext = createContext<Theme | undefined>(undefined);`,

    provider: `// 2. Create a Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`,

    useContext: `// 3. Use the context in components
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <Button 
      title="Toggle Theme"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
}`,

    customHook: `// 4. Create a custom hook for better DX
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}`,
  },

  pros: [
    "No external dependencies",
    "Simple API for basic use cases",
    "Works with React DevTools",
    "Type-safe with TypeScript",
  ],

  cons: [
    "Re-renders all consumers on any state change",
    "No built-in performance optimizations",
    "Can become messy with multiple contexts",
    "No DevTools like Redux DevTools",
  ],

  whenToUse: [
    "Theme switching",
    "User authentication state",
    "Locale/language preferences",
    "Simple app-wide settings",
  ],

  whenNotToUse: [
    "Complex state with many updates",
    "Performance-critical applications",
    "When you need time-travel debugging",
    "Large applications with many state slices",
  ],

  comparison: {
    vsRedux: "Redux is more powerful but has more boilerplate. Use Context for simple cases.",
    vsZustand: "Zustand is simpler than Redux but more optimized than Context.",
  },
};

export type Explanation = typeof explanation;

