import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Brain, TrendingUp, ChevronRight, Star, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
      title: "Revenue Strategy",
      description: "Align your sales, marketing, and customer success teams to create a unified revenue engine. We develop strategies that drive predictable, sustainable growth."
    },
    {
      icon: <Monitor className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Process Optimization",
      description: "Streamline your revenue operations with efficient workflows and automation. We optimize your tech stack and processes to increase productivity and ROI."
    },
    {
      icon: <Brain className="w-16 h-16 text-orange-500 service-icon" />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights. We help you build metrics-driven operations that enable better decision-making and forecast accuracy."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechGrowth Inc",
      content: "Their RevOps expertise transformed our sales process. We've seen a 40% increase in pipeline velocity."
    },
    {
      name: "Michael Chen",
      role: "CEO, CloudScale Solutions",
      content: "The ROI from their RevOps consulting has been incredible. Our conversion rates improved by 35%."
    },
    {
      name: "Lisa Martinez",
      role: "CRO, DataFirst Analytics",
      content: "They helped us align our teams and tech stack. Our customer acquisition costs dropped by 25%."
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Logo />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </a>
              <a 
                href="#how-we-help" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#how-we-help')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How We Help
              </a>
              <a 
                href="#who-its-for" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#who-its-for')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Who It's For
              </a>
              <a 
                href="#what-you-get" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#what-you-get')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                What You Get
              </a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-md"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
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
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
            <a 
              href="#how-we-help" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#how-we-help')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              How We Help
            </a>
            <a 
              href="#who-its-for" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#who-its-for')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Who It's For
            </a>
            <a 
              href="#what-you-get" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#what-you-get')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              What You Get
            </a>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hero-gradient relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            <h1 className="text-6xl font-bold leading-tight">
              The Engine for
              <span className="gradient-text block">Scalable Revenue</span>
              Growth
            </h1>
            <p className="text-xl text-gray-600">
              B2B companies can't afford siloed teams, leaky funnels or guesswork. If your sales cycles feel slow, your CRM is messy or your leads go nowhere, the problem isn't your people - it's your process.
            </p>
            <div className="relative z-[45]">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                Book a Free Consultation
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
      <section id="services" className="py-20 bg-gradient-to-b from-transparent to-orange-50">
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

      {/* How We Help Section */}
      <section id="how-we-help" className="py-20 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">How We Help</h2>
            <p className="text-xl text-gray-600">Real solutions for your revenue challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Revenue Alignment</h3>
              <p className="text-gray-600 mb-4">
                Our analytics solutions help you:
              </p>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Build predictable revenue models</li>
                <li>Identify growth opportunities</li>
                <li>Track key performance metrics</li>
                <li>Make data-backed decisions</li>
              </ul>
            </div>

            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Process Optimization</h3>
              <p className="text-gray-600 mb-4">
                Our process optimization solutions deliver:
              </p>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>30-50% reduction in sales cycle time</li>
                <li>Automated workflow management</li>
                <li>Improved forecast accuracy</li>
                <li>Streamlined tech stack integration</li>
              </ul>
            </div>

            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Data-Driven Growth</h3>
              <p className="text-gray-600 mb-4">
                Our analytics solutions help you:
              </p>
              <ul className="text-gray-600 space-y-2 list-disc pl-4">
                <li>Build predictable revenue models</li>
                <li>Identify growth opportunities</li>
                <li>Track key performance metrics</li>
                <li>Make data-backed decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Who It's For</h2>
            <p className="text-xl text-gray-600 relative z-10">Tailored solutions for growing businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">Team Alignment</h3>
              <p className="text-gray-600">Need tighter alignment between marketing, sales and success teams to close more deals</p>
            </div>

            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">Growth Focused</h3>
              <p className="text-gray-600">Ready to scale revenue but struggling with inefficient processes and manual workflows</p>
            </div>

            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">Data Challenges</h3>
              <p className="text-gray-600">Lack visibility into pipeline metrics and need better reporting across teams</p>
            </div>

            <div 
              className="service-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl font-bold mb-3 gradient-text">Tech Stack Issues</h3>
              <p className="text-gray-600">Need help optimizing your CRM and sales tools to work more efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What You Get</h2>
          
          {/* First Row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div 
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="text-orange-500 text-4xl font-bold">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">RevOps Diagnostic</h3>
                  <p className="text-gray-600 mb-6">We perform a full RevOps diagnostic to evaluate your funnel and identify gaps across marketing, sales, and customer success.</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Deliverables</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Full funnel diagnostic report</li>
                      <li>• Revenue operations assessment</li>
                      <li>• Tech stack audit</li>
                      <li>• Process gap analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="text-orange-500 text-4xl font-bold">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Strategic Roadmap</h3>
                  <p className="text-gray-600 mb-6">We develop a custom implementation plan to optimize your revenue operations and drive growth.</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Deliverables</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Custom RevOps playbook</li>
                      <li>• Implementation roadmap</li>
                      <li>• Tech stack recommendations</li>
                      <li>• Process optimization plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div 
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="text-orange-500 text-4xl font-bold">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Implementation & Integration</h3>
                  <p className="text-gray-600 mb-6">We execute the roadmap and implement solutions across your entire revenue operations.</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Deliverables</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Optimized CRM configuration</li>
                      <li>• Automated workflows</li>
                      <li>• Sales enablement tools</li>
                      <li>• Team training & documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="text-orange-500 text-4xl font-bold">04</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Optimization & Growth</h3>
                  <p className="text-gray-600 mb-6">We continuously monitor, optimize and scale your revenue operations for sustained growth.</p>
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Deliverables</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Monthly strategy sessions</li>
                      <li>• Performance dashboards</li>
                      <li>• Optimization recommendations</li>
                      <li>• Quarterly business reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold gradient-text mb-6">Ready to Transform Your Revenue Operations?</h2>
            <p className="text-xl text-gray-600">Schedule a free consultation to discuss your needs and see how we can help.</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-200 to-yellow-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFirstStepChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFirstStepChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFirstStepChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Best Time to Call</label>
                  <select
                    name="preferred_time"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFirstStepChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 h-32 resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Tell us about your current challenges"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
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
                Delivering high-impact Revenue Operations strategies that drive predictable growth and efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Revenue Strategy</li>
                <li>Process Optimization</li>
                <li>Data & Analytics</li>
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
                Work With Us
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