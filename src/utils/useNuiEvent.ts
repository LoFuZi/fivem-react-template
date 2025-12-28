import { useEffect, useRef } from 'react';

// Hook générique pour écouter un événement spécifique
export const useNuiEvent = <T = any>(action: string, handler: (data: T) => void) => {
  // On utilise une ref pour éviter de recréer l'event listener à chaque render
  // On change le type pour accepter "undefined" et on initialise avec "undefined"
    const savedHandler = useRef<((data: T) => void) | undefined>(undefined);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent) => {
      // FiveM envoie souvent les données dans event.data
      const { action: eventAction, data } = event.data;

      // Si l'action correspond, on déclenche la fonction
      if (savedHandler.current && eventAction === action) {
        savedHandler.current(data);
      }
    };

    window.addEventListener('message', eventListener);
    return () => window.removeEventListener('message', eventListener);
  }, [action]);
};