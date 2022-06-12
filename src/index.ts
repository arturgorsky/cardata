import { saveDataToFile } from "./csv-handler";
import { getNumberOfCars } from "./scrapers/total-number-of-cars";

const main = async () => {
  const oneHourInMs = 1000 * 60 * 60;
  setInterval(async () => {
    console.log("New request send");
    const data = await getNumberOfCars();
    saveDataToFile(data);
  }, oneHourInMs);
};

main();
