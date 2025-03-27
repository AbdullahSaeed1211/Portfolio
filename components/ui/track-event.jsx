"use client";

import React, { Suspense } from 'react';
import { useAnalytics } from '@/lib/hooks/use-analytics';

/**
 * Inner component that uses analytics
 */
function TrackEventContent({
  children,
  eventName,
  properties = {},
  ...props
}) {
  const { trackEvent } = useAnalytics();

  const handleClick = (e) => {
    // Track the event
    trackEvent(eventName, properties);

    // If the original child has an onClick, call it
    if (React.isValidElement(children) && children.props.onClick) {
      children.props.onClick(e);
    }
  };

  // Clone the child element with the new onClick handler
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      onClick: handleClick,
    });
  }

  // If not a valid element, just render with a wrapper
  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  );
}

/**
 * A component that wraps any element and tracks clicks as events in Google Analytics
 * 
 * @example
 * <TrackEvent eventName="download_resume" properties={{ source: 'hero_section' }}>
 *   <Button>Download Resume</Button>
 * </TrackEvent>
 */
export function TrackEvent(props) {
  return (
    <Suspense fallback={props.children}>
      <TrackEventContent {...props} />
    </Suspense>
  );
} 