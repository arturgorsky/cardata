// Asynchronously:
import fs from "fs";

export const saveDataToFile = async (data: {
  timestamp: string;
  data: string;
}) => {
  fs.appendFile("data.csv", `${data.timestamp},${data.data}\n`, function (err) {
    if (err) throw err;
  });
};
