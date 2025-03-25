export const parseStringIntoObject = (str) => {
  const match = str.match(/^(.+?):\s(.+)$/);
  if (!match) {
    return;
  }

  return {
    name: match[1].trim(),
    url: match[2].trim(),
  };
};

export const parseFileContent = (content) => {
  const contentArray = content.split("\n");
  const urlsCollection = [];

  contentArray.forEach((string) => {
    const urlObject = parseStringIntoObject(string);
    if (urlObject) urlsCollection.push(urlObject);
  });

  return urlsCollection;
};
