import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CommandMenu } from './components/CommandMenu';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  return (
    <>
      {/* Circular Color-Inversion Custom Cursor (28px default / 42px interactive) */}
      <CustomCursor />

      {/* Loading Screen Overlay */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Persistent Floating Navbar */}
      <Navbar onOpenCommandMenu={() => setIsCommandMenuOpen(true)} />

      {/* Command Menu Modal */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
      />

      {/* Main Portfolio Page */}
      <Home isLoaded={isLoaded} />
    </>
  );
}
