import { useState } from "react";
import { motion } from "framer-motion";

interface ResumeProps {
  id?: string;
}

const Resume: React.FC<ResumeProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Replace this URL with your Google Drive sharing link
    // Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
    //drive.google.com/file/d//view?usp=drive_link
    const googleDriveUrl =
      import.meta.env.VITE_RESUME_URL;

    if (!googleDriveUrl) {
      console.error("Resume URL is not defined in .env file.");
      setIsLoading(false);
      return;
    }
    // Open in new tab to handle Google Drive's download page
    window.open(googleDriveUrl, "_blank");
    setIsLoading(false);
  };

  return (
    <section id={id} className="relative w-full py-16">
      <div className="absolute inset-0 opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-[#2D3748] mb-6">
          Interested in My Experience?
        </h2>
        <p className="dark:text-gray-300 text-[#4A5568] mb-8 text-lg max-w-2xl mx-auto">
          Download my resume to learn more about my professional journey,
          skills, and achievements.
        </p>
        <motion.button
          onClick={handleDownload}
          disabled={isLoading}
          className={`inline-flex items-center px-8 py-3 text-lg font-semibold text-white 
            bg-gradient-to-r from-blue-400 to-blue-600 rounded-full
            hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg
            hover:shadow-blue-400/20 hover:shadow-xl
            ${isLoading ? "opacity-75 cursor-not-allowed" : "hover:scale-105"}`}
          whileHover={!isLoading ? { scale: 1.05 } : {}}
          whileTap={!isLoading ? { scale: 0.95 } : {}}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Opening Resume...
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>View Resume</span>
            </div>
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default Resume;
