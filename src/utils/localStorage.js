const URLS_ARRAY_KEY = "urls_array";

export const getUrlsFromLocalStorage = () => {
  const data = localStorage.getItem(URLS_ARRAY_KEY);

  if (data) return JSON.parse(data);
};

export const saveUrlsInLocalStorage = (urlsArray) => {
  const data = localStorage.setItem(URLS_ARRAY_KEY, JSON.stringify(urlsArray));
};
