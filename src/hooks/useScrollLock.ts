import { useState } from "react";
import { isFirefox } from "../utils";

export function useBodyScrollLock(): [boolean, (lock: boolean) => void] {
    const bodyLocked = document.body.style.overflow === 'clip';
    const [isLocked, setIsLocked] = useState<boolean>(bodyLocked);
    const [initialBodyOverflow, setInitialBodyOverflow] = useState<string>('');

    const lockBodyScroll = (lock: boolean): void => {
        if (lock === isLocked) {
            // already in the correct state, nothing to do
            return;
        }

        if (lock) {
            setInitialBodyOverflow(document.body.style.overflow);
            document.body.style.overflow = 'clip';
        } else {
            setInitialBodyOverflow('');
            // Firefox has a bug with overflow: clip. It required default value
            // to make it work correctly. "auto" is using as default
            document.body.style.overflow = initialBodyOverflow || isFirefox() ? 'auto' : '';
        }

        setIsLocked(lock)
    }

    return [isLocked, lockBodyScroll]
  }