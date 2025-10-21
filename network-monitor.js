/**
 * Network Request Monitor
 * 
 * This script monitors all network requests to help identify where
 * the "Background 1.mp4" request is coming from.
 */

console.log('🔍 Network Monitor initialized');

// Store all network requests for analysis
const networkRequests = [];

// Monitor fetch requests
const originalFetch = window.fetch;
window.fetch = function(...args) {
  const url = args[0];
  const timestamp = new Date().toISOString();
  const requestInfo = {
    type: 'fetch',
    url: url,
    timestamp: timestamp,
    stack: new Error().stack
  };
  
  networkRequests.push(requestInfo);
  console.log('🌐 Fetch request:', url);
  
  if (typeof url === 'string' && url.includes('Background')) {
    console.log('🎥 BACKGROUND VIDEO FETCH DETECTED!');
    console.log('🎥 URL:', url);
    console.log('🎥 Timestamp:', timestamp);
    console.trace('🎥 Stack trace:');
  }
  
  return originalFetch.apply(this, args).then(response => {
    console.log('✅ Fetch response:', url, response.status);
    return response;
  }).catch(error => {
    console.error('❌ Fetch error:', url, error);
    throw error;
  });
};

// Monitor XMLHttpRequest
const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new originalXHR();
  const originalOpen = xhr.open;
  const originalSend = xhr.send;
  
  xhr.open = function(method, url, ...args) {
    const timestamp = new Date().toISOString();
    const requestInfo = {
      type: 'xhr',
      method: method,
      url: url,
      timestamp: timestamp,
      stack: new Error().stack
    };
    
    networkRequests.push(requestInfo);
    console.log('🌐 XHR request:', method, url);
    
    if (typeof url === 'string' && url.includes('Background')) {
      console.log('🎥 BACKGROUND VIDEO XHR DETECTED!');
      console.log('🎥 Method:', method);
      console.log('🎥 URL:', url);
      console.log('🎥 Timestamp:', timestamp);
      console.trace('🎥 Stack trace:');
    }
    
    return originalOpen.apply(this, [method, url, ...args]);
  };
  
  xhr.send = function(...args) {
    console.log('📤 XHR send:', xhr._method, xhr._url);
    return originalSend.apply(this, args);
  };
  
  return xhr;
};

// Monitor resource loading
const originalCreateElement = document.createElement;
document.createElement = function(tagName) {
  const element = originalCreateElement.call(this, tagName);
  
  if (tagName.toLowerCase() === 'video') {
    console.log('🎥 Video element created');
    
    // Monitor src changes
    let currentSrc = element.src;
    Object.defineProperty(element, 'src', {
      get: function() {
        return currentSrc;
      },
      set: function(value) {
        console.log('🎥 Video src changed to:', value);
        if (value && value.includes('Background')) {
          console.log('🎥 BACKGROUND VIDEO SRC SET!');
          console.trace('🎥 Stack trace:');
        }
        currentSrc = value;
      }
    });
  }
  
  return element;
};

// Monitor all resource loading events
window.addEventListener('load', () => {
  console.log('📄 Page loaded, analyzing network requests...');
  
  // Check for any Background video requests
  const backgroundRequests = networkRequests.filter(req => 
    req.url && req.url.includes('Background')
  );
  
  if (backgroundRequests.length > 0) {
    console.log('🎥 Found Background video requests:');
    backgroundRequests.forEach((req, index) => {
      console.log(`🎥 Request ${index + 1}:`, req);
    });
  } else {
    console.log('✅ No Background video requests found in network monitor');
  }
  
  // Check video elements
  const videos = document.querySelectorAll('video');
  console.log('🎥 Video elements found:', videos.length);
  videos.forEach((video, index) => {
    console.log(`🎥 Video ${index + 1}:`, {
      src: video.src,
      currentSrc: video.currentSrc,
      readyState: video.readyState,
      networkState: video.networkState
    });
  });
});

// Expose network requests for debugging
window.getNetworkRequests = () => networkRequests;
window.getBackgroundRequests = () => networkRequests.filter(req => 
  req.url && req.url.includes('Background')
);

console.log('🔍 Network Monitor ready - all requests will be logged');