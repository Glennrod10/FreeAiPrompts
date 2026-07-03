export function encodeState(data) {
  try {
    const json = JSON.stringify(data);
    const encoded = btoa(encodeURIComponent(json));
    return encoded;
  } catch {
    return null;
  }
}

export function decodeState(hash) {
  try {
    const decoded = decodeURIComponent(atob(hash));
    const data = JSON.parse(decoded);
    if (data && typeof data === 'object' && data.variables && data.mode) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}

export function getStateFromURL() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return null;
  return decodeState(hash);
}

export function pushStateToURL(data) {
  const encoded = encodeState(data);
  if (encoded) {
    const url = new URL(window.location);
    url.hash = encoded;
    window.history.replaceState({}, '', url);
    return true;
  }
  return false;
}
