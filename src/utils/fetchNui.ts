export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

export async function fetchNui<T = any>(eventName: string, data?: any): Promise<T> {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  if (isEnvBrowser()) {
    console.log(`[lofuzi NUI] Envoi vers Lua: ${eventName}`, data);
    return Promise.resolve({} as T);
  }

  const resourceName = (window as any).GetParentResourceName 
    ? (window as any).GetParentResourceName() 
    : 'nui-frame-app';

  try {
    const resp = await fetch(`https://${resourceName}/${eventName}`, options);
    return await resp.json();
  } catch (error) {
    console.error(`Erreur fetchNui vers ${eventName}:`, error);
    return Promise.resolve({} as T);
  }
}