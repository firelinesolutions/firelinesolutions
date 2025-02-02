import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Menu, X, ArrowLeft, Target, AlertCircle, CheckCircle, ArrowRight, Search, TrendingUp, Layout, MessageSquare, Users, ChartBar, Star, Mail, Phone, ChevronRight } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "Why Brand Strategy Is the Secret to Business Growth (And How to Fix Yours Today)",
    excerpt: "When most businesses think about growth, they focus on marketing, sales, or advertising—but what if the real problem isn't how much you promote, but how your brand is perceived? A strong brand strategy is the foundation of long-term success...",
    date: "March 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    content: `
      <article class="prose prose-lg max-w-none prose-headings:gradient-text prose-blockquote:border-orange-500">
        <p class="text-xl mb-8">
          When most businesses think about growth, they focus on marketing, sales, or advertising—but what if the real problem isn't how much you promote, but how your brand is perceived? A strong brand strategy is the foundation of long-term success, helping you stand out, attract loyal customers, and increase revenue. Without a clear brand identity, even the best marketing efforts can fail.
        </p>

        <p class="mb-8">
          Studies show that consistent branding can increase revenue by up to 23% (Lucidpress) and that 81% of consumers need to trust a brand before they buy from it (Edelman). If your brand isn't clear, consistent, and positioned well in your market, you're leaving money on the table.
        </p>

        <h2 class="text-3xl font-bold mb-6 gradient-text flex items-center gap-2">
          📌 What Is Brand Strategy & Why Does It Matter?
        </h2>
        <p class="mb-4">Brand strategy is more than just a logo or website. It's the foundation of how people perceive, trust, and engage with your business.</p>

        <p class="mb-4">A strong brand strategy helps you:</p>
        <ul class="space-y-2 mb-8">
          <li class="flex items-center gap-2">✔️ Stand out from competitors in a crowded market</li>
          <li class="flex items-center gap-2">✔️ Attract the right audience (and turn them into loyal customers)</li>
          <li class="flex items-center gap-2">✔️ Increase pricing power (premium brands charge more and customers pay for trust)</li>
          <li class="flex items-center gap-2">✔️ Build a long-term reputation that drives customer referrals</li>
        </ul>

        <blockquote class="border-l-4 border-orange-500 pl-4 py-2 my-8 text-lg italic">
          💡 Example: Tesla doesn't just sell electric cars—they sell innovation, sustainability, and a futuristic lifestyle. That's brand strategy in action.
        </blockquote>

        <h2 class="text-3xl font-bold mb-6 gradient-text flex items-center gap-2">
          📌 3 Branding Mistakes That Are Hurting Your Business
        </h2>

        <h3 class="text-2xl font-bold mb-4">1️⃣ No Clear Brand Positioning</h3>
        <p class="mb-4">If you can't explain why your business is different, customers won't see a reason to choose you.</p>

        <p class="font-bold mb-2">🚀 Fix it:</p>
        <ul class="space-y-2 mb-8">
          <li>• Ask yourself: "What is the ONE thing that makes my business unique?"</li>
          <li>• Define your Unique Value Proposition (UVP) in a single sentence.</li>
          <li>• Example: Instead of saying "We sell skincare," a strong UVP would be: "We provide organic, dermatologist-approved skincare for sensitive skin."</li>
        </ul>

        <h3 class="text-2xl font-bold mb-4">2️⃣ Inconsistent Branding & Messaging</h3>
        <p class="mb-4">If your website says one thing, social media says another, and ads have a different tone, customers won't trust your brand. Consistency is key.</p>

        <h3 class="text-2xl font-bold mb-4">3️⃣ Trying to Market to Everyone</h3>
        <p class="mb-4">Not everyone is your customer. Successful brands target a specific audience.</p>

        <div class="bg-orange-50 rounded-xl p-6 my-8">
          <h2 class="text-3xl font-bold mb-6 gradient-text flex items-center gap-2">
            🔍 DIY Brand Strategy Audit
          </h2>
          <p class="mb-4">Take this quick audit to see where your brand stands:</p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">✓ Do you have a Unique Value Proposition (UVP)?</li>
            <li class="flex items-center gap-2">✓ Is your messaging consistent across platforms?</li>
            <li class="flex items-center gap-2">✓ Do you know your ideal customer?</li>
            <li class="flex items-center gap-2">✓ Are your visuals consistent on all platforms?</li>
            <li class="flex items-center gap-2">✓ Would customers describe your brand the way you want?</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mb-6 gradient-text">🎯 Final Thoughts</h2>
        <p class="mb-6">Your brand is more than just a logo—it's the reason customers trust and choose you. Whether you're an entrepreneur, small business owner, or a growing company, having a strong brand strategy will help you increase revenue, attract premium clients, and scale faster.</p>
      </article>
    `
  }
];

function Blog() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
              <Link to="/blog" className="text-orange-500 font-medium">
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
              className="block px-3 py-2 text-orange-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}

      {/* Blog Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-4">
            Strategic Insights
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Expert perspectives on business strategy, growth, and innovation
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="group"
                >
                  <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center"
                >
                  Read More 
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 text-right max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>

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

export default Blog; 