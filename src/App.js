import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Heart, DollarSign, Clock, AlertCircle } from 'lucide-react';

export default function LifeInsuranceLeads() {
  const [state, handleSubmit] = useForm('xgaeerbo');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Get life insurance by BIANCA</div>
          <div className="text-sm text-gray-600">Your Peace of Mind, Our Priority</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Affordable Life Insurance Protection for Your Family
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Affordable life insurance plans tailored to your needs. Get a personalized quote in minutes.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Heart className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Peace of Mind</h3>
                  <p className="text-gray-600 text-sm">Know your loved ones are protected</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <DollarSign className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Affordable Rates</h3>
                  <p className="text-gray-600 text-sm">Plans starting from just $15/month</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Process</h3>
                  <p className="text-gray-600 text-sm">Get approved and covered in days, not weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            
            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  We've received your information. An agent will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {state.errors && state.errors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm text-red-800 font-medium">Please check the form for errors</p>
                      <ValidationError field="submit" errors={state.errors} className="text-xs text-red-700 mt-1" />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                  <ValidationError field="fullName" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                  <ValidationError field="email" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                  <ValidationError field="phone" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="18"
                    max="120"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="35"
                  />
                  <ValidationError field="age" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In *
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-- Select an option --</option>
                    <option value="term-life">Term Life Insurance</option>
                    <option value="whole-life">Whole Life Insurance</option>
                    <option value="universal-life">Universal Life Insurance</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                  <ValidationError field="interestedIn" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Questions or Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your insurance needs..."
                    rows="3"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-400"
                >
                  <Send size={18} />
                  {state.submitting ? 'Submitting...' : 'Get Free Quote'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is secure and will only be used to contact you about your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Insurance Agent</h2>
          <p className="text-lg text-gray-600">Get professional insurance guidance from our licensed expert</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/images/bianca.jpg" 
                  alt="Bianca Elena GAMAN"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Bianca Elena GAMAN</h3>
              <p className="text-blue-600 font-semibold text-lg mb-6">Licensed Insurance Agent</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About Me</h4>
                  <p className="text-gray-600">
                    With years of experience in the insurance industry, I'm dedicated to helping families and individuals find the right life insurance coverage that fits their budget and protects their loved ones. My goal is to make the insurance process simple, transparent, and stress-free.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose Me?</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-600">Licensed and certified insurance professional</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-600">Personalized quotes tailored to your needs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-600">Dedicated support throughout the process</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-600">Competitive rates and flexible payment options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Me Directly</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span> <a href="tel:7276378123" className="text-blue-600 hover:underline">(727) 637-8123</a>
                    </p>
                    <p className="text-gray-700">
  <span className="font-semibold">Email:</span> <a href="mailto:bianca@lifeinsurancebianca.com" className="text-blue-600 hover:underline">bianca@lifeinsurancebianca.com</a>
</p><p className="text-sm text-gray-600">
                      Call anytime to discuss your life insurance needs or get a quick quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 LifeSecure Insurance. All rights reserved.</p>
          <p className="mt-2">Licensed Insurance Agent | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
}