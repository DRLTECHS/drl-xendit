import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-200">
            DRL TECHS - Computer Software Trading (DRL GLOBAL)
          </p>
          <p className="text-sm text-blue-300 mt-2">Last Updated: February 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-8">
              {/* Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using the services provided by DRL TECHS - Computer Software Trading, 
                  operating under DRL GLOBAL ("Company," "we," "our," or "us"), you agree to be bound by 
                  these Terms of Service ("Terms"). If you do not agree to these Terms, please do not 
                  use our services.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 mb-4">DRL TECHS provides the following services:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Custom software development and web application development</li>
                  <li>Mobile application development (iOS and Android)</li>
                  <li>E-commerce solutions and payment gateway integration</li>
                  <li>IT consulting and technical support services</li>
                  <li>Software maintenance and updates</li>
                  <li>Cloud hosting and deployment services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">By using our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to any systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Intellectual Property</h3>
                    <p className="text-gray-600">
                      All content, features, and functionality of our website and services, including but 
                      not limited to text, graphics, logos, icons, images, audio clips, and software, are 
                      owned by DRL TECHS and are protected by copyright, trademark, and other intellectual 
                      property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Deliverables</h3>
                    <p className="text-gray-600">
                      Upon full payment for our services, clients receive ownership rights to the custom 
                      software, applications, or other deliverables created specifically for them, unless 
                      otherwise specified in a separate agreement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Payment terms will be specified in individual project agreements or invoices</li>
                  <li>We accept payments through Xendit, bank transfer, and other approved methods</li>
                  <li>A deposit may be required before project commencement</li>
                  <li>Late payments may incur additional fees as specified in the agreement</li>
                  <li>All prices are in Philippine Pesos (PHP) unless otherwise stated</li>
                  <li>Taxes and fees are the responsibility of the client unless otherwise agreed</li>
                </ul>
              </div>

              {/* Project Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Project Terms and Delivery</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Project timelines will be agreed upon before commencement</li>
                  <li>Delays caused by client may extend the delivery timeline</li>
                  <li>We reserve the right to modify timelines with reasonable notice</li>
                  <li>Client feedback and approvals are required at specified milestones</li>
                  <li>Final delivery is contingent upon full payment</li>
                  <li>Revision requests are subject to the terms of the project agreement</li>
                </ul>
              </div>

              {/* Warranties */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Warranties and Disclaimers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Limited Warranty</h3>
                    <p className="text-gray-600">
                      We warrant that our services will be performed in a professional and workmanlike 
                      manner. We provide a 30-day warranty period for bug fixes on delivered software 
                      from the date of final delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Disclaimer</h3>
                    <p className="text-gray-600">
                      EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT 
                      WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES 
                      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DRL TECHS SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR 
                  REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, 
                  OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive 
                  information shared during the course of the business relationship. This includes but 
                  is not limited to business plans, technical specifications, customer data, and 
                  financial information.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Either party may terminate services with 30 days written notice</li>
                  <li>We may terminate immediately for breach of these Terms</li>
                  <li>Upon termination, client must pay for all work completed</li>
                  <li>Confidentiality obligations survive termination</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  Republic of the Philippines. Any disputes arising from these Terms shall be subject 
                  to the exclusive jurisdiction of the courts located in Laguna, Philippines.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any 
                  material changes by posting the updated Terms on our website. Your continued use of 
                  our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:admin@drl-softechs.dev" className="text-blue-600 hover:underline">
                      admin@drl-softechs.dev
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+639272796875" className="text-blue-600 hover:underline">
                      +63 927 279 6875
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-600">
                      542 Lopez Jaena St, Brgy. Bulilan Norte, Pila, Laguna, Philippines
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;