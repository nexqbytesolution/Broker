import Head from "next/head";
import Link from "next/link";
import ContactHero from "../../component/ContactHero";
import ContactForm from "../../component/ContactForm";
import ContactInfo from "../../component/ContactInfo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export default function Contact() {
  const quickContacts = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM-6PM",
      action: "tel:+15551234567",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@primebroker.com",
      subInfo: "24/7 Support",
      action: "mailto:info@primebroker.com",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: MapPin,
      title: "Visit Office",
      info: "123 Business Ave",
      subInfo: "Suite 100, NY 10001",
      action: "#",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM",
      subInfo: "Sat: 10AM-4PM",
      action: "#",
      color: "from-blue-600 to-blue-700",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you respond to inquiries?",
      answer: "We typically respond within 2-4 hours during business hours.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer video calls and virtual property tours.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire metropolitan area and surrounding regions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us - PrimeBroker Real Estate</title>
        <meta
          name="description"
          content="Get in touch with PrimeBroker for all your real estate needs. Our expert brokers are ready to help you find rooms, land, offices, and more."
        />
        <meta
          name="keywords"
          content="real estate contact, property broker, real estate agent, property inquiry"
        />
      </Head>

      <ContactHero />

      {/* Quick Contact Cards - 60% White */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {quickContacts.map((item, index) => (
              <Link
                key={index}
                href={item.action}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div
                  className={`bg-linear-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">{item.info}</p>
                <p className="text-sm text-gray-500">{item.subInfo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - 60% White/Gray alternating */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Our team is here to help you
              find the perfect property.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns on large screens - 60% White */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info - Takes 1 column on large screens - 30% Blue accents */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 60% White */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Quick Answers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - 60% Gray */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Licensed Brokers
              </h3>
              <p className="text-gray-600 text-sm">
                All our agents are fully licensed and certified
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Response
              </h3>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries within 2-4 hours
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600 text-sm">
                Deep knowledge of the local real estate market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner - 30% Blue */}
      <section className="relative bg-linear-to-r from-blue-600 to-blue-700 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
            24/7 Emergency Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our emergency support team is available 24/7 for urgent property
            matters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +1 (555) 123-4567</span>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl text-lg transition duration-300 backdrop-blur-sm"
            >
              View Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Bar - 10% Black/Dark */}
      <section className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">info@primebroker.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">
                123 Business Ave, Suite 100, NY 10001
              </span>
            </div>
            <div className="flex gap-4">
              {["FB", "TW", "IG", "LI"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
