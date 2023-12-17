
export function getLanguage(headers: Headers): string {
  return headers.get('accept-language')?.startsWith('pl') ? 'pl' : 'en';
}
