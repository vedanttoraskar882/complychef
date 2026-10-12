import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const PilotModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      fullName: formData.fullName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      emailAddress: formData.emailAddress.trim(),
      organisationName: formData.organisationName.trim(),
      submissionDateTime: new Date().toISOString(),
      submittedAt: new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    try {
      const existingData = localStorage.getItem('complychef_pilot_submissions');
      let submissionsList = [];
      if (existingData) {
        try {
          const parsed = JSON.parse(existingData);
          if (Array.isArray(parsed)) {
            submissionsList = parsed;
          }
        } catch (err) {
          submissionsList = [];
        }
      }
      submissionsList.push(newSubmission);
      localStorage.setItem('complychef_pilot_submissions', JSON.stringify(submissionsList));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }

    setIsSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      organisationName: '',
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
    >
      {/* Backdrop click handler */}
      <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-charcoal/10 overflow-hidden z-10 animate-scaleUp">
        
        {/* Header Strip */}
        <div className="bg-brand-charcoal px-6 py-5 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-charcoal">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-brand-yellow uppercase font-bold">
                Pilot Programme
              </div>
              <h3 id="pilot-modal-title" className="font-heading font-extrabold text-lg text-white">
                Request a Pilot
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-green-light border border-green-200 text-brand-green flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-brand-charcoal mb-2">
                Request Received
              </h4>
              <p className="text-sm text-brand-charcoal/75 leading-relaxed max-w-sm mx-auto mb-8">
                Thank you for your interest. Our compliance team will review your application and contact you with pilot onboarding details.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal font-mono text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-mono text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5"
                >
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/15 text-brand-charcoal text-sm placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block font-mono text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5"
                  >
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="e.g. alex@restaurant.co.uk"
                    className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/15 text-brand-charcoal text-sm placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block font-mono text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5"
                  >
                    Phone Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +44 7700 900077"
                    className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/15 text-brand-charcoal text-sm placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organisationName"
                  className="block font-mono text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5"
                >
                  Organisation Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="organisationName"
                  name="organisationName"
                  required
                  value={formData.organisationName}
                  onChange={handleChange}
                  placeholder="e.g. Fuji Kitchen Ltd"
                  className="w-full px-4 py-3 rounded-xl bg-brand-ivory/60 border border-brand-charcoal/15 text-brand-charcoal text-sm placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-deep text-brand-charcoal font-mono text-xs font-bold tracking-wider uppercase py-4 px-6 rounded-full shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/35 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
