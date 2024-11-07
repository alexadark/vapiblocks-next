'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: 'AI-Powered Efficiency',
      description:
        'Streamline your sales processes with AI that handles repetitive tasks, allowing your team to focus on high-value work.',
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: 'Personalized Experience',
      description:
        "AI4Sales adapts to your brand's voice, creating a seamless extension of your team that resonates with customers.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-500" />,
      title: 'Enhanced Customer Connections',
      description:
        'Build stronger relationships with AI-driven insights and timely, relevant communications.',
    },
  ];

  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Empower Your Sales with AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
