"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Your message has been sent successfully.");
      form.reset();
    } else {
      setMessage(result.error || "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Let&apos;s Connect
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-300">
                  {portfolioData.personal.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-300">
                  {portfolioData.personal.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-300">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Send Message
            </button>

            {message && (
              <p className="text-sm text-gray-300">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}