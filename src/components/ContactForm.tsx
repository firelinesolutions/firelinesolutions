import React from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  // Copy the form state and handlers from App.tsx
  // ... form implementation

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-gray-50 rounded-2xl p-3 max-w-[350px] w-full relative">
        {/* ... form content from App.tsx ... */}
      </div>
    </div>
  );
} 