const URLS_ARRAY_KEY = "urls_array";

export const getUrlsFromLocalStorage = () => {
  const data = localStorage.getItem(URLS_ARRAY_KEY);

  if (data) return JSON.parse(data);
  else return [];
};

export const saveUrlsInLocalStorage = (urlsArray) => {
  localStorage.setItem(URLS_ARRAY_KEY, JSON.stringify(urlsArray));
};
