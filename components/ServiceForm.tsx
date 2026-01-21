"use client";

import { useState } from "react";
import { sendServiceRequest } from "@/app/actions/sendServiceRequest";

export default function ServiceForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setError("");
    try {
      await sendServiceRequest(formData);
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  if (success) {
    return (
      <p className="text-green-600 font-medium">
        Thank you. Your service request has been sent successfully.
      </p>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-lg">
      <input
        name="fullName"
        required
        placeholder="Full Name"
        className="w-full p-3 border rounded-md"
      />

      <select
        name="service"
        required
        className="w-full p-3 border rounded-md"
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
        required
        placeholder="Address"
        className="w-full p-3 border rounded-md"
      />

      <input
        name="mobile"
        type="tel"
        required
        placeholder="Mobile Number"
        className="w-full p-3 border rounded-md"
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-md"
      >
        Submit Request
      </button>
    </form>
  );
}
