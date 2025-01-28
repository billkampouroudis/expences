import { Preferences } from '@capacitor/preferences';

export const getStorage = async (key: string) => {
  const { value } = await Preferences.get({ key });
  return value ? JSON.parse(value) : null;
};

export const setStorage = async (value: any) => {
  return await Preferences.set({ key: 'storage', value });
};
