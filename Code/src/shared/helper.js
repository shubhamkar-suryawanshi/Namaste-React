// Store all functions which can be reusable

export const filterData = (inputValue, list) => {
  const filterD = list.filter((restos) =>
    restos.data.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filterD;
};
