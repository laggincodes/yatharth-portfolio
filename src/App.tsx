import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingScreen } from './components/LoadingScreen';
import { CommandMenu } from './components/CommandMenu';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  return (
    <ThemeProvider>

      {/* Small Solid White Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen Overlay */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Command Menu Modal */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
      />

      {/* Main Portfolio Page with Entry-Page Navbar */}
      <Home
        isLoaded={isLoaded}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />
    </ThemeProvider>
  );
}

