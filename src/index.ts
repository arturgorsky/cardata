import axios from "axios";

const url =
  "https://www.otomoto.pl/i2/ajax/ad-item/total/?search[category_id]=29";

const getNumberOfCars = async () => {
  const numberOfCars = await (await axios.get(url)).data.total_count;
  const timestamp = new Date();
  console.log(timestamp, numberOfCars);
};

getNumberOfCars();
