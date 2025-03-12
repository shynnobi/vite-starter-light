import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-h2 mb-6">Hello World</h1>
        <p className="text-xl mb-8">Welcome to our Vite + React + TypeScript starter</p>
        <Link
          to="/typography-guide"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View Typography Guide
        </Link>
      </div>
    </div>
  );
}

export default App;
