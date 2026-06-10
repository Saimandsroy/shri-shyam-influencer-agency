import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-display font-bold text-brand dark:text-brand mb-4 text-center"
      >
        Sri Shyam Campaigning Agency
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg font-body text-gray-700 dark:text-gray-300 text-center max-w-2xl"
      >
        Welcome to our modern influencer marketing platform. We connect top brands with the right creators.
      </motion.p>
      
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 px-8 py-3 bg-brand text-white font-display font-semibold rounded-full hover:bg-brand-dark transition-colors duration-300"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Home;
