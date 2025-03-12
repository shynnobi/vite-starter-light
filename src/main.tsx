import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import TypographyGuide from './pages/TypographyGuide.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/typography-guide" element={<TypographyGuide />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
