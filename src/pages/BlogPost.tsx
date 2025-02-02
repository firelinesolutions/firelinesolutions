import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Logo } from '../Logo';
import { Menu, X, ArrowLeft, Mail, Phone, ChevronRight } from 'lucide-react';
import { blogPosts } from './Blog'; // We'll need to export blogPosts from Blog.tsx

function BlogPost() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleCtaClick = () => {
    setShowForm(true);
  };

  const handleFirstStepChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

    try {
      const response = await fetch('https://hook.us2.make.com/gy8tf1zdtg64s1bgarhwcdmaq83isnll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setShowForm(false);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <Logo />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
                Blog
              </Link>
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
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}

      {/* Blog Post Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold mb-6 gradient-text">
                {post.title}
              </h1>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-8">
                <button
                  onClick={handleCtaClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white p-6 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-[1.02] cursor-pointer text-xl font-bold text-center"
                >
                  Want to take your brand to the next level? Get a free brand audit and let's refine your strategy today.
                </button>
              </div>
            </div>
          </article>
          
          {/* Add Back to Blog link */}
          <div className="mt-8 text-right">
            <Link 
              to="/blog"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Update the Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-50 rounded-2xl p-3 max-w-[350px] w-full relative">
            <button 
              onClick={() => setShowForm(false)}
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

      {/* Add the confirmation modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-[350px] w-full relative">
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
              onClick={() => setShowConfirmation(false)}
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

export default BlogPost; 