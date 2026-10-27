export const EVENT_OPEN_SECRET_PAW = 'cat-easter-egg:open-secret-paw';
export const EVENT_CURIOUS_CAT_UNLOCKED = 'cat-easter-egg:curious-cat-unlocked';

export const triggerSecretPaw = (): void => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT_OPEN_SECRET_PAW));
  }
};

export const triggerCuriousCat = (): void => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT_CURIOUS_CAT_UNLOCKED));
  }
};
