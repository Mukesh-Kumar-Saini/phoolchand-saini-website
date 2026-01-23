"use client";

import { useState } from "react";
import { sendServiceRequest } from "@/app/actions/sendServiceRequest";

export default function ServiceForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError("");
    setLoading(true);

    try {
      await sendServiceRequest(formData);
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-center text-green-600 dark:text-green-400 font-medium">
        Your service request has been submitted. I will contact you soon.
      </p>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="fullName"
        placeholder="Full Name"
        required
        className="
          w-full px-4 py-3 rounded-md border
          bg-white text-gray-900 border-gray-300
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        "
      />

      <select
        name="service"
        required
        className="
          w-full px-4 py-3 rounded-md border
          bg-white text-gray-900 border-gray-300
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        "
      >
        <option value="">Select Service</option>
        <option>All Civil Consultancy</option>
        <option>All Civil Repairing</option>
        <option>Rewiring</option>
        <option>Water Proofing</option>
        <option>Dismantling</option>
        <option>Sanitary and Light Repairing</option>
        <option>Core Cutting</option>
        <option>Labor Transport</option>
        <option>Other</option>
      </select>

      <textarea
        name="address"
        placeholder="Address"
        required
        rows={3}
        className="
          w-full px-4 py-3 rounded-md border
          bg-white text-gray-900 border-gray-300
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        "
      />

      <input
        name="mobile"
        placeholder="Mobile Number"
        required
        className="
          w-full px-4 py-3 rounded-md border
          bg-white text-gray-900 border-gray-300
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        "
      />

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          bg-black text-white px-6 py-3 rounded-md
          transition-all duration-150
          hover:bg-gray-900
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          dark:bg-white dark:text-black dark:hover:bg-gray-200
        "
      >
        {loading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
