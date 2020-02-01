import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar.component';
import Form  from './components/form/Form.component';
import PageContent from './components/page-content/PageContent.component';
import ThemeProvider from './contexts/ThemeContext';
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
         <Navbar />
         <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
