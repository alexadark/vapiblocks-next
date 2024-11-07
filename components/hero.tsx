'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import VapiGlob from '@/components/vapi-glob';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between pb-40 pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          AI4Sales
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Empower your sales team with AI that feels like an extension of you.
          Streamline processes, enhance customer experiences, and amplify what
          makes your brand unique.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-1/2 flex justify-center"
      >
        <VapiGlob />
      </motion.div>
    </div>
  );
  //   return <h1>Hero</h1>;
};

export default Hero;
