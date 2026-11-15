/**
 * Privacy-conscious analytics utility.
 * Connects to standard dataLayer or privacy-first analytics tools (e.g., Plausible, Umami, Fathom)
 * without requiring third-party credentials or invasive cookies.
 */

export type AnalyticsEvent = 
  | 'project_cta_click'
  | 'contact_form_submit'
  | 'email_click'
  | 'github_click'
  | 'linkedin_click'
  | 'service_inquiry_click'
  | 'package_select_click';

export interface EventProperties {
  project?: string;
  service?: string;
  package?: string;
  budget?: string;
  contactMethod?: string;
  sourceUrl?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...properties
  };

  // 1. Standard Google Tag Manager / dataLayer if integrated
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // 2. Plausible analytics integration if loaded
  if (typeof window.plausible === 'function') {
    window.plausible(event, { props: properties });
  }

  // 3. Umami analytics integration if loaded
  if (window.umami && typeof window.umami.track === 'function') {
    window.umami.track(event, properties);
  }

  // 4. Dispatch a custom browser event for local tracking or custom extensions
  const customEvent = new CustomEvent('devops_portfolio_analytics', {
    detail: eventPayload
  });
  window.dispatchEvent(customEvent);

  // Development logger
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event: ${event}]`, properties);
  }
}
