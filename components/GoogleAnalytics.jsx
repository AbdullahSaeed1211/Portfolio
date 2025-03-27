"use client";

import { useEffect } from 'react';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

/**
 * Google Analytics component for Next.js
 * This component renders the Google Analytics script
 * It ensures the measurement ID is loaded from environment variables
 */
export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  useEffect(() => {
    // Log when GA is initialized in development
    if (process.env.NODE_ENV === 'development' && measurementId) {
      console.log(`Google Analytics initialized with ID: ${measurementId}`);
    }
  }, [measurementId]);

  // Only render the script if we have a valid measurement ID
  if (!measurementId) {
    return null;
  }

  return <NextGoogleAnalytics gaId={measurementId} />;
} 