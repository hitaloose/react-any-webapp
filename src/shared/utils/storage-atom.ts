import { AtomEffect } from "recoil";

export const storageAtom =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
        return;
      }
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
