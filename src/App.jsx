import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/routes';
import ContactModal from './components/Home/ContactModal';
import BackTopButton from './components/shared/BackTop/BackTopButton';

function App() {
  const [showButtons, setShowButtons] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButtons(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <RouterProvider router={router} />

      {/* Back to top button */}
      <BackTopButton showButtons={showButtons} />
      {/* Contact Us button */}
      <ContactModal showButtons={showButtons} />
    </>
  );
}

export default App;
