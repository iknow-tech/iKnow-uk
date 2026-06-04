import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-midnight min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} className="text-red-400" />
            </div>
            <h1 className="font-display font-bold text-2xl text-white mb-2">Something went wrong</h1>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              An unexpected error occurred. Please try refreshing the page or contact support if the issue persists.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="accent" size="sm" onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
              <Link to="/">
                <Button variant="secondary" size="sm">
                  Go Home
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
