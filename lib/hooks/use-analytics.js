"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { use } from 'react';

/**
 * Custom hook for Google Analytics tracking
 * Automatically tracks page views when the route changes
 * Provides methods for tracking custom events
 */
export function useAnalytics() {
  const pathname = usePathname();
  const searchParamsData = useSearchParams();
  
  // Track page views when the route changes
  useEffect(() => {
    if (pathname && window.gtag) {
      // Construct the URL from pathname and search params
      const url = `${pathname}${
        searchParamsData?.toString() ? `?${searchParamsData.toString()}` : ''
      }`;
      
      // Send page view event to Google Analytics
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParamsData]);

  /**
   * Track a custom event in Google Analytics
   * @param {string} action - The event action
   * @param {Object} params - Additional event parameters
   */
  const trackEvent = (action, params = {}) => {
    if (!window.gtag) return;
    
    window.gtag('event', action, params);
  };

  return { trackEvent };
} 