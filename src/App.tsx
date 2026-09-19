/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ActivePage, ProductCategory } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');

  const handleCategoryNavigation = (categoryName: string) => {
    setSelectedCategory(categoryName as ProductCategory);
    if (categoryName === 'Doors') {
      setActivePage('doors');
    } else {
      setActivePage('products');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#22201D]">
      {/* Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onNavigateToCategory={handleCategoryNavigation}
      />

      {/* Main Page Content */}
      <main className="grow">
        {activePage === 'home' && (
          <Home
            setActivePage={setActivePage}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activePage === 'products' && (
          <Products initialCategory={selectedCategory} />
        )}

        {activePage === 'doors' && (
          <Products initialCategory="Doors" />
        )}

        {activePage === 'about' && (
          <About
            onContactClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Sticky / Fixed WhatsApp Lead Button */}
      <WhatsAppButton />

      {/* Premium Footer */}
      <Footer
        activePage={activePage}
        setActivePage={setActivePage}
        onNavigateToCategory={handleCategoryNavigation}
      />
    </div>
  );
}
