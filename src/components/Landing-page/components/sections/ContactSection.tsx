import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to transform your real estate business with AI? Contact us for a
                personalized consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-cyan-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">contact@airealty.ai</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-cyan-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-cyan-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">123 AI Boulevard, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}