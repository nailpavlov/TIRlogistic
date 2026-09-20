import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Benefits from './components/Benefits';
import Services from './components/Services';
import TransportTypes from './components/TransportTypes';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import Contacts from './components/Contacts';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Services />
        <TransportTypes />
        <HowItWorks />
        <QuoteForm />
        <Contacts />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
