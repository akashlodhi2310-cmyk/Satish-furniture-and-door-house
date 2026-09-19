import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, Send, CheckCircle2 } from 'lucide-react';
import { business, getWhatsAppLink, getPhoneLink } from '../config/business';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCategory, setInquiryCategory] = useState('Doors & Furniture');
  const [inquiryNote, setInquiryNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `Hi Satish Furniture & Door House, my name is ${inquiryName || 'Customer'}. I am interested in ${inquiryCategory}.${inquiryNote ? ` Note: ${inquiryNote}` : ''} I would like to visit the showroom / know more details.`;
    window.open(getWhatsAppLink(customText), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-14 sm:py-20 bg-[#FCFAF7] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Visit Showroom or Enquire Online
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            We welcome you to visit our showroom in Bhopal or get in touch via WhatsApp for quick catalogue updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#F6F3ED] border border-[#DDD4C5] p-6 sm:p-8 rounded-xs space-y-6 shadow-2xs">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {business.name}
                </h3>
                <p className="text-xs text-[#704834] font-medium tracking-wide uppercase mt-1">
                  Furniture & Door Showroom
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E8E1D5] text-xs sm:text-sm text-[#44403C]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#9B5D43] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1C1917]">Showroom Address:</span>
                    <span>{business.address}</span>
                    <span className="block text-[#78716C] mt-0.5">PIN: {business.pincode}</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1C1917]">Visiting Hours:</span>
                    <span>{business.openingHours}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1C1917]">WhatsApp Enquiries:</span>
                    <span>{business.whatsappDisplay}</span>
                    <span className="block text-[11px] text-[#78716C]">Direct messaging for photos & sizing</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1C1917]">Showroom Contact:</span>
                    <span>{business.phoneDisplay}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1C1917]">Email:</span>
                    <span>{business.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E1D5] flex flex-col sm:flex-row gap-3">
                <a
                  id="contact-maps-btn"
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#DDD4C5]" />
                  <span>Google Maps</span>
                </a>

                <a
                  id="contact-whatsapp-direct-btn"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form & Embedded Map */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quick WhatsApp Inquiry Form */}
            <div className="bg-[#FCFAF7] border border-[#DDD4C5] p-6 sm:p-8 rounded-xs shadow-2xs">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Send Quick Inquiry to Showroom
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] mt-1 mb-6">
                Tell us about your home requirements. This immediately opens WhatsApp with your pre-formatted note.
              </p>

              {submitted && (
                <div className="mb-4 p-3.5 bg-[#EAF7ED] border border-[#BDE8C6] text-[#1E6B2C] text-xs rounded-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your WhatsApp inquiry draft was generated! Our team will assist you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-form-name" className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#DDD4C5] rounded-xs focus:outline-hidden focus:border-[#704834]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-form-category" className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Requirement Category
                    </label>
                    <select
                      id="contact-form-category"
                      value={inquiryCategory}
                      onChange={(e) => setInquiryCategory(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#DDD4C5] rounded-xs focus:outline-hidden focus:border-[#704834]"
                    >
                      <option value="Main Entrance & Wooden Doors">Main Entrance & Wooden Doors</option>
                      <option value="Living Room Furniture & Sofas">Living Room Furniture & Sofas</option>
                      <option value="Bedroom Sets & Wardrobes">Bedroom Sets & Wardrobes</option>
                      <option value="Dining Tables & Chairs">Dining Tables & Chairs</option>
                      <option value="Custom Home Furniture">Custom Home Furniture</option>
                      <option value="Full Home Furnishing">Full Home Furnishing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-form-message" className="block text-xs font-semibold text-[#1C1917] mb-1">
                    Dimensions or Specific Requirements (Optional)
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={3}
                    value={inquiryNote}
                    onChange={(e) => setInquiryNote(e.target.value)}
                    placeholder="e.g. Looking for a 36x84 teak wood entrance door and 6-seater dining table..."
                    className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#DDD4C5] rounded-xs focus:outline-hidden focus:border-[#704834]"
                  ></textarea>
                </div>

                <button
                  id="contact-submit-inquiry-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4 text-[#DDD4C5]" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xs overflow-hidden border border-[#DDD4C5] bg-[#EBE5DB]">
              <div className="p-3 bg-[#F6F3ED] border-b border-[#DDD4C5] flex items-center justify-between text-xs text-[#57534E]">
                <span className="font-semibold text-[#1C1917]">Interactive Map: Kolar Road, Bhopal</span>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#704834] font-medium hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
              
              <div className="relative w-full h-[260px] bg-[#E8E1D5]">
                <iframe
                  title="Satish Furniture and Door House Google Map Location"
                  src="https://maps.google.com/maps?q=Satish+furniture+and+door+house+Bairagarh+Chichali+Kolar+Road+Bhopal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
