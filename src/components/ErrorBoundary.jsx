import { Component } from "react";

/**
 * Catches errors in the 3D canvas (e.g. failed model loads) so the page
 * doesn't stay blank. Useful for debugging GitHub Pages deployment.
 */
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D scene error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-slate-200 p-6 text-center">
          <p className="text-lg font-medium text-slate-800">
            The 3D scene couldn&apos;t load.
          </p>
          <p className="text-sm text-slate-600 max-w-md">
            Check the browser console (F12 → Console) and Network tab to see if
            model files (e.g. island.glb) failed to load.
          </p>
          <pre className="text-xs text-left bg-slate-300 p-3 rounded overflow-auto max-h-32">
            {this.state.error?.message || "Unknown error"}
          </pre>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
