"use client";
import { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 text-center text-red-600">
            <h2 className="font-semibold text-lg">⚠️ Something went wrong.</h2>
            <p className="text-sm text-gray-600">
              Try refreshing the page or going back.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
