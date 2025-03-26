export const isObject = (element) =>
  typeof element === "object" && !Array.isArray(element);

export const countRowsAndColumns = (collection) => {
  if (!collection) return;

  let columns = 0;
  let rows = 0;

  if (isObject(collection)) {
    columns = Object.keys(collection).length;

    return {
      rows: columns > 0 ? 1 : 0,
      columns,
    };
  }

  rows = collection.length;
  if (rows > 0) columns = Object.keys(collection[0]).length;

  return { rows, columns };
};
