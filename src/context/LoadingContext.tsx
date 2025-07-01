import React, { createContext, useContext, useEffect, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Add a small delay to ensure all components are rendered
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Delay to show loading state for at least 500ms
    };

    // Check if the page is already loaded
    if(document.readyState === 'complete'){
      handleLoad();
    }else{
      window.addEventListener('load', handleLoad);
    }

    // Also add a fallback timeout in case something goes wrong
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds max loading time

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [])
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 