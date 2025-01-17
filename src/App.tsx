import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Palette, TrendingUp, ChevronRight, Star, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTQ6NDc6NDctMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTQ6NDc6NDctMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE0OjQ3OjQ3LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDEyZjE5LTJlMDctNDI4NC1hMzE1LTNkYjM4ZjM0ZjM0ZiIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0xOVQxNDo0Nzo0Ny0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7QGG8wAABFhJREFUeJzt3U1y2zYYgGHAzqTL9AjxEbLPMXqUHiF3yKqTI/QI6RFcZxXHkm3x+wFIQO/zTLuYjE1R4EsABCjw2+12+wUQ9fvWDQDYEgEgiwCQRQDIIgBkEQCyCABZBIAsAkAWASCLAJBFAMgiAGQRALIIAFkEgCwCQBYBIIsAkEUAyPoP1PKqgXJGG1QAAAAASUVORK5CYII=";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState({
    services: false,
    testimonials: false
  });
  const [formStep, setFormStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [] as string[]
  });

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
      icon: <Monitor className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Web Design",
      description: "Custom, responsive websites that convert visitors into customers. We create stunning digital experiences that leave lasting impressions."
    },
    {
      icon: <Palette className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Branding",
      description: "Distinctive brand identities that make lasting impressions. We craft unique visual languages that tell your story."
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Marketing Consulting",
      description: "Strategic guidance to amplify your market presence. Data-driven strategies that deliver measurable results."
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
    { id: 'web-design', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Marketing Consulting' }
  ];

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStep(2);
  };

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
      services: formData.services.join(', '),
      preferred_date: selectedDate ? selectedDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : '',
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
      
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        alert(`There was an error submitting your message: ${error.message}. Please try again later.`);
      } else {
        alert('There was an error submitting your message. Please try again later.');
      }
    }
  };

  const getNextAvailableWeekday = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Keep adding days until we hit a weekday (1-5, Monday-Friday)
    while (tomorrow.getDay() === 0 || tomorrow.getDay() === 6) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    
    // Format date as YYYY-MM-DD
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    // Return false for Saturday (6) and Sunday (0)
    return day !== 0 && day !== 6;
  };

  const filterWeekdays = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-50/90 backdrop-blur-sm z-50 border-b border-gray-100">
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
              <button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg"
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
        <div className="md:hidden fixed inset-0 z-40 bg-gray-50/80 backdrop-blur-md pt-20">
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
            <button 
              onClick={() => {
                setShowForm(true);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hero-gradient">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              Creating Digital
              <span className="gradient-text block">Experiences</span>
              That Drive Growth
            </h1>
            <p className="text-xl text-gray-600">
              Delivering personalized digital solutions that transform your brand. 
              From stunning websites to strategic branding, every project receives 
              dedicated attention to drive real results.
            </p>
            <button 
              onClick={() => setShowForm(true)}
              className="group bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
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
      <section id="services" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
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
          <div className="bg-gray-50 rounded-2xl p-4 max-w-[350px] w-full relative">
            <button 
              onClick={() => {
                setShowForm(false);
                setFormStep(1);
              }}
              className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-1"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>

            {formStep === 1 ? (
              <>
                <h3 className="text-lg font-bold mb-3 gradient-text">Let's Start Your Project</h3>
                <form onSubmit={handleNext} className="space-y-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Services Interested In</label>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceOptions.map((service) => (
                        <label 
                          key={service.id}
                          className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-orange-500 cursor-pointer"
                        >
                          <input 
                            type="checkbox"
                            name="services"
                            value={service.id}
                            checked={formData.services.includes(service.id)}
                            onChange={handleServiceChange}
                            className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2"
                          />
                          <span className="text-sm text-gray-700">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleFirstStepChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-24 resize-none"
                      placeholder="Tell us about your project"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 font-medium"
                  >
                    Next Step
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold mb-3 gradient-text">Schedule a Call</h3>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <DatePicker
                      name="preferred_date"
                      selected={selectedDate}
                      onChange={(date: Date) => {
                        setSelectedDate(date);
                        console.log('Selected date:', date);
                      }}
                      minDate={new Date()}
                      maxDate={new Date().setMonth(new Date().getMonth() + 3)}
                      filterDate={filterWeekdays}
                      placeholderText="Select a date"
                      dateFormat="MMMM d, yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                      excludeDates={[new Date()]}
                      showPopperArrow={false}
                      calendarClassName="rounded-lg shadow-lg border border-gray-100"
                      popperClassName="z-[1000]"
                      popperPlacement="bottom-start"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
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
                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="w-1/2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 font-medium"
                    >
                      Book Call
                    </button>
                  </div>
                </form>
              </>
            )}

            <div className="mt-3 pt-2 border-t border-gray-100 text-center text-xs">
              <p className="text-gray-600">Prefer email? Reach us at</p>
              <a href="mailto:damien@firelinesolutionsagency.com" className="text-orange-500 font-medium hover:text-orange-600">
                damien@firelinesolutionsagency.com
              </a>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-[350px] w-full relative">
            <button 
              onClick={() => {
                setShowConfirmation(false);
                setShowForm(false);
                setFormStep(1);
              }}
              className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-1"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
            
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your message and will be in touch within 1-2 business days to discuss your project and confirm your consultation.
                </p>
              </div>
            </div>

            <button 
              onClick={() => {
                setShowConfirmation(false);
                setShowForm(false);
                setFormStep(1);
              }}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 font-medium"
            >
              Close
            </button>
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
                Creating exceptional digital experiences that drive business growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Web Design</li>
                <li>Branding</li>
                <li>Marketing Consulting</li>
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
                className="mt-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
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

export default App;