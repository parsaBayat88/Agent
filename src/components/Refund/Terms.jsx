import React from 'react';
import { Mail } from 'lucide-react';
// import { Header } from '../Layout/Header';


export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100" id='terms'>
      {/* <Header /> */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#8200fb] to-cyan-500 bg-clip-text text-transparent">
              Terms and Refund Policy
            </h1>
            
            <div className="space-y-12">
              {/* Introduction */}
              <Section 
                title="1. Introduction" 
                content="Welcome to Agent Plus. By using our AI automation services, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before entering into any agreement with us."
              />

              {/* Scope of Services */}
              <Section 
                title="2. Scope of Services" 
                content="We provide AI automation solutions tailored to real estate agencies. These services include but are not limited to lead generation, task automation, and client engagement tools."
              />

              {/* Payment Terms */}
              <Section title="3. Payment Terms">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Initial Setup Fee: A one-time payment for building and implementing the automation system.</li>
                  <li>Monthly Subscription Fee: Ongoing charges for maintaining and optimizing the system.</li>
                  <li>All payments must be made in accordance with the invoice due dates.</li>
                </ul>
              </Section>

              {/* Problem Resolution Policy */}
              <Section title="4. Problem Resolution Policy">
                <p className="text-gray-300 mb-4">If issues arise with the automation services:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Step 1: Clients must notify us in writing, detailing the problem.</li>
                  <li>Step 2: Our team will work diligently to resolve the issue within a reasonable timeframe.</li>
                  <li>Step 3: If the issue cannot be resolved to the client's satisfaction, the client may choose to terminate the partnership (see refund policy below).</li>
                </ul>
              </Section>

              {/* Refund Policy */}
              <Section title="5. Refund Policy">
                <p className="text-gray-300 mb-4">We are committed to client satisfaction and offer the following refund terms:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Eligibility: Refunds apply only to the initial setup fee, not to the monthly subscription charges.</li>
                  <li>Timeframe: Clients can request a refund of the initial setup fee within the first 3 months of service if they choose to terminate the partnership.</li>
                  <li>Process: Refunds will be processed after confirming that all client data and automation systems have been securely decommissioned.</li>
                </ul>
              </Section>

              {/* Termination of Services */}
              <Section title="6. Termination of Services">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Clients must provide a 15-day notice in writing to terminate the partnership.</li>
                  <li>Upon termination, access to the automation services will be revoked.</li>
                </ul>
              </Section>

              {/* Liability */}
              <Section title="7. Liability">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>We are not responsible for indirect, incidental, or consequential damages arising from the use of our services.</li>
                  <li>Our maximum liability is limited to the amount paid for the initial setup fee.</li>
                </ul>
              </Section>

              {/* Governing Law */}
              <Section 
                title="8. Governing Law" 
                content="These terms are governed by the laws of California, United States. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in San Francisco, California."
              />

              {/* Contact Information */}
              <Section title="9. Contact Us">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#8200fb]" />
                  <span>For any questions about these terms or the refund policy, please contact us at agentplus41@gmail.com</span>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, content, children }) {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#8200fb]/50 transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      {content && <p className="text-gray-300">{content}</p>}
      {children}
    </section>
  );
}
