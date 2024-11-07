'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-40 bg-white dark:bg-black/40 w-full" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/images/blue-pattern.webp"
              alt="AINomics Founder"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 md:pl-8"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              About AINomics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              AINomics was born from a vision to create AI that aligns with your
              brand's voice, amplifies your strengths, and empowers you to
              connect with customers authentically.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our founder, Ignacio Reyes, saw AI not just as software, but as an
              extension of our own processes, expertise, and strengths. AINomics
              is about using AI to streamline what drains us and amplify what
              fuels us.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We believe in "AI4You" - crafting AI that mirrors the essence of
              your brand and empowers you to focus on what matters most:
              building real connections with your customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
