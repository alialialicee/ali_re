// Fallback declarations for constrained environments where scoped @types packages
// cannot be installed. In a normal install, @types/react and @types/react-dom
// provide the full definitions declared in package.json.
declare module 'react' {
  export type FormEvent<T = Element> = { preventDefault: () => void; currentTarget: T };
  export type ChangeEvent<T = Element> = { target: T; currentTarget: T };
  export function useState<T>(initialValue: T): [T, (value: T | ((previous: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useCallback<T extends (...args: never[]) => unknown>(callback: T, deps: unknown[]): T;
  const React: { StrictMode: (props: { children?: unknown }) => unknown };
  export default React;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): { render(children: unknown): void };
  const ReactDOM: { createRoot: typeof createRoot };
  export default ReactDOM;
}

declare module 'react/jsx-runtime' {
  export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;
}

declare module '*.css';

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
