"use client";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    { value: "general", label: "General Inquiry", icon: HelpCircle },
    { value: "rooms", label: "Room Finding", icon: User },
    { value: "land", label: "Land Purchase", icon: Phone },
    { value: "office", label: "Office Rental", icon: Mail },
    { value: "selling", label: "Selling Property", icon: MessageSquare },
    { value: "other", label: "Other Services", icon: HelpCircle },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus({ submitted: true, success: false, message: "Sending..." });

    // Simulate API call
    try {
      // Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        submitted: true,
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "general",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, success: false, message: "" });
      }, 5000);
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-xl border transition-all duration-200
    ${
      errors[fieldName]
        ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
        : "border-gray-200 hover:border-blue-200 focus:border-blue-500 focus:ring-blue-200"
    }
    focus:outline-none focus:ring-4 dark:bg-gray-700 dark:text-white
    placeholder:text-gray-400 text-gray-700
  `;

  const labelClasses =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <div className="bg-white rounded-2xl">
      {/* Header - 30% Blue accent */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-blue-600 rounded-full"></div>
          <h3 className="text-2xl font-bold text-gray-900">
            Send us a Message
          </h3>
        </div>
        <p className="text-gray-500 text-sm ml-4">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </div>

      {/* Status Message - 60% White with accent colors */}
      {status.message && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${
            status.success
              ? "bg-green-50 border-green-200 text-green-700"
              : status.message !== "Sending..."
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-blue-50 border-blue-200 text-blue-700"
          }`}
        >
          {status.success ? (
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          ) : status.message !== "Sending..." ? (
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          ) : (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0 mt-0.5"></div>
          )}
          <span className="text-sm">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email - 60% White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className={labelClasses}>
              Full Name <span className="text-blue-600">*</span>
            </label>
            <div className="relative">
              <User
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                  errors.name ? "text-red-400" : "text-gray-400"
                }`}
              />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses("name")} pl-12`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-blue-600">*</span>
            </label>
            <div className="relative">
              <Mail
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                  errors.email ? "text-red-400" : "text-gray-400"
                }`}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputClasses("email")} pl-12`}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Service - 60% White */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className={labelClasses}>
              Phone Number{" "}
              <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 hover:border-blue-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all dark:bg-gray-700 dark:text-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className={labelClasses}>
              Service Interested In
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all appearance-none bg-white dark:bg-gray-700 dark:text-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message - 60% White */}
        <div className="space-y-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span className="text-blue-600">*</span>
          </label>
          <div className="relative">
            <MessageSquare
              className={`absolute left-4 top-4 w-5 h-5 transition-colors ${
                errors.message ? "text-red-400" : "text-gray-400"
              }`}
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`${inputClasses("message")} pl-12 resize-none`}
              placeholder="Tell us about your property needs... (minimum 10 characters)"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            {errors.message && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.message}
              </p>
            )}
            <span
              className={`text-xs ml-auto ${
                formData.message.length < 10
                  ? "text-gray-400"
                  : "text-green-600"
              }`}
            >
              {formData.message.length}/10 characters
            </span>
          </div>
        </div>

        {/* Submit Button - 30% Blue linear */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status.submitted && status.message === "Sending..."}
            className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {status.message === "Sending..." ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          {/* Trust Badge - 10% Black accent */}
          <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            We respect your privacy and will never share your information
          </p>
        </div>
      </form>

      {/* Response Time Guarantee - 60% Gray background */}
      <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <CheckCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Fast Response Guarantee
            </p>
            <p className="text-xs text-gray-500">
              We aim to respond to all inquiries within 2-4 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
