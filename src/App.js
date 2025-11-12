// App.js - Main Application Component
import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Clock, Users, Phone, Mail, MapPin, Menu, X, Car, Award, Sparkles } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '500+', label: 'Premium Rides' },
    { number: '24/7', label: 'Service Hours' },
    { number: '50+', label: 'Luxury Vehicles' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      description: 'Luxury airport limo service with flight tracking and meet & greet',
      icon: <Car className="w-8 h-8" />
    },
    {
      title: 'Corporate Travel',
      description: 'Professional chauffeur service for business meetings and events',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Special Events',
      description: 'Wedding, casino, and party transportation in premium vehicles',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'VIP Experience',
      description: 'Bespoke luxury service tailored to your individual preferences',
      icon: <Award className="w-8 h-8" />
    }
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! We will contact you soon.');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black-90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-gold">LE</span>VINCE
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#fleet" className="hover:text-gold transition-colors">Fleet</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black-95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#fleet" className="block hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Fleet</a>
              <a href="#about" className="block hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="absolute inset-0 bg-black-60"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            Your <span className="text-gold">First Class</span><br />
            Chauffeur Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
            Travelling in ultimate luxury with First Class Travel Chauffeur Service. With the largest fleet of luxury vehicles, 
            we offer bespoke, first-class chauffeur services, personalised journey that ensure you arrive in style.
          </p>
          <button className="bg-gold hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-fadeInUp animation-delay-600">
            Request a Quote
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-400 mb-8">Trusted by Prestigious Brands</p>
          <p className="text-2xl font-semibold text-gold">Businesses around the globe choose First Class Travel</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2 counter">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gold">LARGEST</span> CHAUFFEUR SERVICE PROVIDER
              </h2>
              <h3 className="text-2xl mb-6 text-gray-300">Tailormade Bespoke VIP Chauffeur Service</h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                The premier choice for award-winning luxury chauffeur services that cater to exclusive clients 
                like you who value elegance, comfort and privacy. Each journey with us is tailored to your 
                individual preferences, ensuring an unparalleled level of service that anticipates and exceeds 
                your expectations.
              </p>
              <div className="flex items-center space-x-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-gold fill-current" />
                ))}
                <span className="ml-4 text-lg font-semibold">Top Rated Service</span>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="aspect-square bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center text-8xl font-bold text-black shadow-2xl">
                LV
              </div>
              <div className="absolute -top-4 -right-4 bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                Award Winner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The exclusive way to travel. Step right in and sit back. We will take care of everything else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 group service-card">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exclusive MPV Luxury Fleet</h2>
            <p className="text-xl text-gray-400">
              Toyata Alphard & Vellfire at your service anytime, anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h3 className="text-3xl font-bold mb-6">Outstanding service. <span className="text-gold">Every time.</span></h3>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                By offering exceptional service with no detail unattended, we have been fortunate enough to have 
                developed into the leading provider of ground transportation in the area.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 feature-item">
                  <Clock className="w-6 h-6 text-gold" />
                  <span>24/7 availability with live tracking</span>
                </div>
                <div className="flex items-center space-x-3 feature-item">
                  <Users className="w-6 h-6 text-gold" />
                  <span>Professional chauffeurs</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center text-4xl font-bold text-gold border border-gold/20 luxury-car-display">
                <div className="text-center">
                  <Car className="w-24 h-24 mx-auto mb-4" />
                  <div>LUXURY FLEET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-400">Ready to experience luxury? Contact us today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 contact-item">
                  <Phone className="w-6 h-6 text-gold" />
                  <span className="text-lg">+60 12-345-6789</span>
                </div>
                <div className="flex items-center space-x-4 contact-item">
                  <Mail className="w-6 h-6 text-gold" />
                  <span className="text-lg">info@le-vince.com</span>
                </div>
                <div className="flex items-center space-x-4 contact-item">
                  <MapPin className="w-6 h-6 text-gold" />
                  <span className="text-lg">Kuala Lumpur, Malaysia</span>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gold/20">
                <h4 className="text-xl font-semibold mb-4 text-gold">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>24 Hours</span>
                  </div>
                  <div className="text-sm text-gold mt-2">
                    Emergency service available 24/7
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg animate-fadeInRight contact-form">
              <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-300"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-300"
                />
                <select className="w-full px-4 py-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-gold focus:outline-none transition-all duration-300">
                  <option value="">Select Service Type</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="corporate">Corporate Travel</option>
                  <option value="events">Special Events</option>
                  <option value="vip">VIP Experience</option>
                </select>
                <textarea 
                  placeholder="Service Requirements & Additional Details" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-gold focus:outline-none resize-none transition-all duration-300"
                />
                <button 
                  onClick={handleQuoteSubmit}
                  className="w-full bg-gold hover:bg-yellow-600 text-black py-3 px-6 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Excellence recognized by our valued clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg testimonial-card">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Exceptional service from start to finish. The attention to detail and professionalism exceeded all expectations."
              </p>
              <div className="text-gold font-semibold">- Corporate Executive</div>
            </div>

            <div className="bg-black p-6 rounded-lg testimonial-card">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Perfect for our wedding day. Arrived on time, impeccably clean vehicle, and made our special day even more memorable."
              </p>
              <div className="text-gold font-semibold">- Wedding Client</div>
            </div>

            <div className="bg-black p-6 rounded-lg testimonial-card">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Reliable airport transfers every time. Never had to worry about being late for flights. Highly recommended!"
              </p>
              <div className="text-gold font-semibold">- Business Traveler</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="text-gold">First Class</span>Travel
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Premium chauffeur service delivering luxury and excellence across Malaysia. 
                Your journey begins with us.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300 cursor-pointer">
                  F
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300 cursor-pointer">
                  T
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300 cursor-pointer">
                  I
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-gold transition-colors">Our Services</a>
                <a href="#fleet" className="block text-gray-400 hover:text-gold transition-colors">Luxury Fleet</a>
                <a href="#about" className="block text-gray-400 hover:text-gold transition-colors">About Us</a>
                <a href="#contact" className="block text-gray-400 hover:text-gold transition-colors">Get Quote</a>
                <a href="#privacy" className="block text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#tands" className="block text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-400">Airport Transfers</div>
                <div className="text-gray-400">Corporate Travel</div>
                <div className="text-gray-400">Wedding Service</div>
                <div className="text-gray-400">Event Transportation</div>
                <div className="text-gray-400">VIP Packages</div>
                <div className="text-gray-400">Hourly Hire</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 First Class Dream Makers Resources. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Designed for luxury. Built for excellence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
