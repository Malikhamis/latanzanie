"use client";
import { useState } from "react";

export default function NewsletterForm({ t }: { t: any }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);
    try {
      const response = await fetch("/.netlify/functions/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFirstName("");
        setEmail("");
      } else {
        setSubmitError(result.error || "Failed to subscribe");
      }
    } catch (err) {
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder={t('newsletter.firstNamePlaceholder')}
        className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
        required
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t('newsletter.emailPlaceholder')}
        className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto"
      >
        {isSubmitting ? t('newsletter.submitting', 'Submitting...') : t('newsletter.button')}
      </button>
      {submitSuccess && (
        <div className="w-full text-green-600 text-center mt-2 text-sm">{t('newsletter.success', 'Successfully subscribed!')}</div>
      )}
      {submitError && (
        <div className="w-full text-red-600 text-center mt-2 text-sm">{submitError}</div>
      )}
    </form>
  );
}
