"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">
            {personal.role}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            {personal.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Contact Me
            </a>

            <a
              href={personal.resume}
              download
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <Image
  src="/images/profile.jpg"
  alt="Vijay Shipte"
  width={500}
  height={500}
  priority
/>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
        aria-label="Scroll to About"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}