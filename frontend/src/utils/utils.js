export const groupBy = (data) => {
  let groupedData = {};

  data?.forEach((element) => {
    let category = element.category;
    if (!groupedData[category]) {
      groupedData[category] = [];
    }
    groupedData[category].push(element);
  });

  return groupedData;
};
