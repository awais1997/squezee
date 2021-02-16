let accessToken = "";

export const setAccessToken = (s: string) => {
  accessToken = s;
};

export const clearAccessToken = () => {
  accessToken = '';
};

export const getAccessToken = () => {
  return accessToken;
};