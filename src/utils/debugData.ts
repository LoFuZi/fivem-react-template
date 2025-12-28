import { isEnvBrowser } from './fetchNui';

export const debugData = (events: { action: string; data: any }[], timer = 1000) => {
  if (isEnvBrowser()) {
    setTimeout(() => {
      for (const event of events) {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              action: event.action,
              data: event.data,
            },
          })
        );
      }
    }, timer);
  }
};