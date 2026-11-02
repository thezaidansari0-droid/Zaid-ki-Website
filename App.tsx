/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleOpenContact = (packageTitle?: string) => {
    setSelectedPackage(packageTitle);
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
    setSelectedPackage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-white selection:bg-sky-500/30 selection:text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Background Ambient Gradient Blobs (DP Sky-Blue & Deep Denim) */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/12 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[650px] h-[650px] bg-sky-400/8 rounded-full blur-[180px] pointer-events-none -z-10" />
      
      {/* Subtle Dot Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      {/* Sticky Top Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 2: Selected Works (id="work") */}
        <SelectedWorks />

        {/* Section 3: Services (id="services") */}
        <Services onOpenContact={handleOpenContact} />

        {/* Section 4: Pricing (id="pricing") */}
        <Pricing onOpenContact={handleOpenContact} />

        {/* Section 5: About (id="about") */}
        <About onOpenContact={handleOpenContact} />
      </main>

      {/* Section 6: Footer & Contact (id="contact") */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp onOpenContact={() => handleOpenContact()} />

      {/* Interactive WhatsApp & Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        packageTitle={selectedPackage}
      />
    </div>
  );
}
