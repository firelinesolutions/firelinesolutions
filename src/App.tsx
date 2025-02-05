import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Brain, TrendingUp, ChevronRight, Star, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { Analytics } from '@vercel/analytics/react';

const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTQ6NDc6NDctMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTQ6NDc6NDctMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE0OjQ3OjQ3LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0xOVQxNDo0Nzo0Ny0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7QGG8wAABFhJREFUeJzt3U1y2zYYgGHAzqTL9AjxEbLPMXqUHiF3yKqTI/QI6RFcZxXHkm3x+wFIQO/zTLuYjE1R4EsABCjw2+12+wUQ9fvWDQDYEgEgiwCQRQDIIgBkEQCyCABZBIAsAkAWASCLAJBFAMgiAGQRALIIAFkEgCwCQBYBIIsAkEUAyPoP1PKqgXJGG1QAAAAASUVORK5CYII=";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState({
    services: false,
    testimonials: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Growth Strategy",
      description: "Develop powerful strategies to accelerate your business growth. We identify untapped opportunities and create actionable plans for market dominance."
    },
    {
      icon: <Monitor className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Performance Optimization",
      description: "Transform your business performance through data-driven insights. We optimize your operations and strategy to maximize profitability and impact."
    },
    {
      icon: <Brain className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Strategic Innovation",
      description: "Stay ahead of market trends with innovative strategies. We help you develop breakthrough solutions that create sustainable competitive advantages."
    }
  ];

  const testimonials = [
    {
      name: "Will Shirley",
      role: "Owner, Redline Mosquito",
      content: "Fireline Solutions transformed our digital presence. The ROI has been incredible."
    },
    {
      name: "Anthony West",
      role: "Owner, FirstInPrints",
      content: "Their attention to detail and creative approach sets them apart from other agencies."
    },
    {
      name: "Derek Whitehead",
      role: "Owner, Organized Collective",
      content: "The best investment we've made in our brand. Exceptional work!"
    }
  ];

  const serviceOptions = [
    { id: 'business-strategy', label: 'Business Strategy' },
    { id: 'digital-transformation', label: 'Digital Transformation' },
    { id: 'operations', label: 'Operations Consulting' }
  ];

  const handleFirstStepChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      preferred_time: e.currentTarget.querySelector<HTMLSelectElement>('select[name="preferred_time"]')?.value || '',
      timestamp: new Date().toISOString(),
      source: 'Website Contact Form'
    };

    console.log('Sending data to webhook:', data);

    try {
      const response = await fetch('https://hook.us2.make.com/gy8tf1zdtg64s1bgarhwcdmaq83isnll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const responseText = await response.text();
      console.log('Webhook response status:', response.status);
      console.log('Webhook response text:', responseText);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}. Response: ${responseText}`);
      }

      setSubmittedData(data);
      setShowConfirmation(true);
      setShowForm(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        alert(`There was an error submitting your message: ${error.message}. Please try again later.`);
      } else {
        alert('There was an error submitting your message. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <Logo />
              </button>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">
                Testimonials
              </a>
              <Link to="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
                Blog
              </Link>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center cursor-pointer"
              >
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-md pt-20">
          <div className="px-4 pt-2 pb-3 space-y-3">
            <a 
              href="#services" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link 
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button 
              onClick={() => {
                setShowForm(true);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hero-gradient relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            <h1 className="text-6xl font-bold leading-tight">
              Accelerating
              <span className="gradient-text block">Business Growth</span>
              Through Strategy
            </h1>
            <p className="text-xl text-gray-600">
              High-impact business strategy consulting that drives exceptional results. 
              We partner with ambitious businesses to achieve breakthrough performance 
              and sustainable growth.
            </p>
            <div className="relative z-[45]">
              <button 
                onClick={() => {
                  setShowForm(true);
                  setIsMenuOpen(false);
                }}
                className="group bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-200 to-yellow-100 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              alt="Digital marketing team"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-28 pb-20 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Strategic Solutions</h2>
            <p className="text-xl text-gray-600 relative z-10">High-impact strategies for ambitious businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card p-8 rounded-2xl shadow-lg ${
                  isVisible.services ? 'slide-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`
                  bg-gradient-to-br from-white to-orange-50 
                  p-8 rounded-2xl shadow-lg 
                  hover:shadow-xl 
                  transition-all duration-300 ease-in-out
                  transform hover:-translate-y-2 hover:scale-105
                  flex flex-col
                  h-[300px]
                  ${isVisible.testimonials ? 'slide-in' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transformOrigin: 'center'
                }}
              >
                <div className="flex items-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-orange-500 fill-current hover:text-orange-600 transition-colors" 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-2 text-lg transition-colors duration-300 group-hover:text-gray-800 flex-grow">
                  {testimonial.content}
                </p>
                <div className="transform transition-all duration-300 hover:translate-x-2 mt-auto">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-orange-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-50 rounded-2xl p-3 max-w-[350px] w-full relative">
            <button 
              onClick={() => {
                setShowForm(false);
              }}
              className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-1"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>

            <h3 className="text-lg font-bold mb-2 gradient-text">Let's Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-1.5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFirstStepChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFirstStepChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFirstStepChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFirstStepChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-20 resize-none"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Best Time to Call</label>
                <select
                  name="preferred_time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 6PM)</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 font-medium"
              >
                Submit
              </button>
            </form>

            <div className="mt-2 pt-2 border-t border-gray-100 text-center text-xs">
              <p className="text-gray-600">Prefer email? Reach us at</p>
              <a href="mailto:damien@firelinesolutionsagency.com" className="text-orange-500 font-medium hover:text-orange-600">
                damien@firelinesolutionsagency.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <Logo inverted={true} />
              </button>
              <p className="text-gray-400">
                Delivering high-impact business strategies that drive exceptional growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Growth Strategy</li>
                <li>Performance Optimization</li>
                <li>Strategic Innovation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:damien@firelinesolutionsagency.com" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>damien@firelinesolutionsagency.com</span>
                </a>
                <a 
                  href="tel:404-939-6126" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>404-939-6126</span>
                </a>
              </div>
              <button 
                onClick={() => setShowForm(true)}
                className="mt-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center cursor-pointer"
              >
                Start a Project
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
            <p>2024 Fireline Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Analytics />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;