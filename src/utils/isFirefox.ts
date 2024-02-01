export const isFirefox = (): boolean =>
  /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator?.userAgent ?? '');
