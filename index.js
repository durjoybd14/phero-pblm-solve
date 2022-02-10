const cardDistribution = (data) => {
  const final = data.map((info) => {
    return (
      info.district.slice(0, 2).toUpperCase() +
      info.currentYear.toString().slice(2, 4) +
      info.postNo.toString().slice(0, 2) +
      info.birthYear
    );
  });
  console.log(final);

  //   return final;
};

cardDistribution([
  {
    name: "Mr Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Mr Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
]);

// console.log(result);
