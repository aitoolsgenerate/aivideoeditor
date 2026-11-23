import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, X } from 'lucide-react';

interface AboutContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'about' | 'contact';
  accentColor: string;
  brandTitle: string;
}

export const AboutContactModal: React.FC<AboutContactModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'about',
  accentColor,
  brandTitle,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || !message.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${brandTitle} ${initialTab === 'about' ? 'About Us' : 'Contact'}`}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="font-display text-xl font-bold uppercase text-slate-900">
            {initialTab === 'about' ? `About ${brandTitle}` : `Contact ${brandTitle}`}
          </h2>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {brandTitle} combines modern frontend engineering with modular Blogger publishing systems.
            Every layout ships with accessible contrast ratios, semantic HTML5 structure, and customizable
            Blogger Theme Designer variables.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span>hello@reactagency.example</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <span>+1 (415) 555-0194</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">
                Inquiry Received
              </h3>
              <p className="text-sm text-slate-600">
                Thanks, {name}. Your message has been queued for our engineering team.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-2 px-4 py-2 text-xs font-semibold text-white rounded-lg"
                style={{ backgroundColor: accentColor }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your Blogger theme customization or agency site goals..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
