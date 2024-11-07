'use client';

import { motion } from 'framer-motion';
import { Bot, BarChart, MessageCircle } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: 'AI Agents',
      description:
        'Tireless AI assistants that work 24/7 to engage with your customers and qualify leads.',
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-500" />,
      title: 'Data Tools',
      description:
        'Powerful analytics that provide valuable insights into your sales process and customer behavior.',
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      title: 'Follow-Up Systems',
      description:
        'Automated, personalized follow-ups that ensure no opportunity slips through the cracks.',
    },
  ];

  return (
    <section
      className="py-40 bg-gray-50 dark:bg-gray-800 w-full"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          How AI4Sales Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3"
            >
              <div className="mb-4 p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
