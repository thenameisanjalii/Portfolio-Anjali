import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/80 dark:bg-black/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="relative">
        {/* Main circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-20 h-20 border-t-4 border-blue-500 dark:border-blue-500 border-solid rounded-full"
        />
        
        {/* Inner circle */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6 border-t-4 border-purple-500 dark:border-purple-500 border-solid rounded-full"
        />

        {/* Loading text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-800 dark:text-white text-lg font-medium whitespace-nowrap transition-colors duration-300"
        >
          Loading Experience...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader; 