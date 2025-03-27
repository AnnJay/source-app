export const isObject = (element) =>
  typeof element === "object" && !Array.isArray(element);

export const countRowsAndColumns = (collection) => {
  let columns = 0;
  let rows = 0;

  if (isObject(collection)) {
    columns = Object.keys(collection).length;
    rows = columns > 0 ? 1 : 0;
  }

  if (Array.isArray(collection)) {
    rows = collection.length;
    if (rows > 0) columns = Object.keys(collection[0]).length;
  }

  return { rows, columns };
};
