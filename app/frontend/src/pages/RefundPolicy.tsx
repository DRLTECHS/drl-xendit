import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <RotateCcw className="w-16 h-16 mx-auto mb-4 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  At DRL TECHS - Computer Software Trading (DRL GLOBAL), we strive to deliver high-quality 
                  software development services that meet our clients' expectations. This Refund Policy 
                  outlines the circumstances under which refunds may be granted and the process for 
                  requesting a refund.
                </p>
              </div>

              {/* Eligible for Refund */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility for Refund</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Refunds May Be Granted When:</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>The project has not yet commenced and no work has been performed</li>
                    <li>We are unable to deliver the agreed-upon services due to our limitations</li>
                    <li>There is a significant deviation from the agreed project specifications that cannot be rectified</li>
                    <li>Technical issues on our end prevent project completion</li>
                    <li>Duplicate payment was made in error</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">Refunds Are NOT Available When:</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Work has already been completed and delivered as per specifications</li>
                    <li>The client changes their mind after work has commenced</li>
                    <li>The client fails to provide necessary materials, feedback, or approvals</li>
                    <li>Project delays are caused by the client</li>
                    <li>The client's requirements change significantly after project start</li>
                    <li>Third-party services or integrations fail due to external factors</li>
                  </ul>
                </div>
              </div>

              {/* Refund Amounts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Amounts</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left">Project Stage</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Refund Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Before project commencement</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">100% refund (minus processing fees)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Planning/Design phase (0-25% complete)</td>
                        <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-semibold">75% refund</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Development phase (26-50% complete)</td>
                        <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-semibold">50% refund</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Development phase (51-75% complete)</td>
                        <td className="border border-gray-300 px-4 py-3 text-orange-600 font-semibold">25% refund</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Final stages (76-100% complete)</td>
                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Refund Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Request Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Submit a Written Request</h3>
                      <p className="text-gray-600">Send an email to admin@drl-softechs.dev with the subject line "Refund Request - [Project Name]"</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Provide Required Information</h3>
                      <p className="text-gray-600">Include your project details, payment information, reason for refund request, and any supporting documentation</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Review Period</h3>
                      <p className="text-gray-600">We will review your request within 5-7 business days and respond with our decision</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Refund Processing</h3>
                      <p className="text-gray-600">If approved, refunds will be processed within 14 business days to the original payment method</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Fees */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Fees</h2>
                <p className="text-gray-600 leading-relaxed">
                  Please note that payment gateway processing fees (charged by Xendit, banks, or other 
                  payment processors) are non-refundable. These fees are typically 2-3% of the transaction 
                  amount and are deducted from the refund amount.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Dispute Resolution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you disagree with our refund decision, you may request a review by:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Submitting additional documentation supporting your claim</li>
                  <li>Requesting a meeting to discuss the matter</li>
                  <li>Engaging in mediation through a mutually agreed third party</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We are committed to resolving disputes fairly and professionally.
                </p>
              </div>

              {/* Exceptions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Special Circumstances</h2>
                <p className="text-gray-600 leading-relaxed">
                  We understand that exceptional circumstances may arise. In cases of medical emergencies, 
                  natural disasters, or other unforeseen events, we will work with clients on a 
                  case-by-case basis to find a fair resolution. Please contact us to discuss your 
                  specific situation.
                </p>
              </div>

              {/* Subscription Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Subscription and Maintenance Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For ongoing subscription or maintenance services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Monthly subscriptions can be cancelled with 30 days notice</li>
                  <li>Annual subscriptions may be eligible for prorated refunds if cancelled within the first 3 months</li>
                  <li>No refunds for partial months of service</li>
                  <li>Cancellation does not affect services already rendered</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For refund requests or questions about this policy, please contact us:
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

export default RefundPolicy;