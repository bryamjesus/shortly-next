export function getBaseUrlClient(): string | undefined {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return undefined;
}

export function getBaseHostClient(): string | undefined {
  if (typeof window !== 'undefined') {
    return window.location.host;
  }
  return undefined;
}
