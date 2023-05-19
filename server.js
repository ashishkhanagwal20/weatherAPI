import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let data = [
  {
    name: "london",
    date_and_time: "02/08/2020 ,09:50:45",
    description: "light snow",
    humidity_in_percent: 80,
    temperature_in_celsius: -1.28,
    pressure_in_hPa: 1004,
  },
  {
    name: "delhi",
    date_and_time: "02/08/2021 ,09:50:45",
    description: "smog",
    humidity_in_percent: 76,
    temperature_in_celsius: 4,
    pressure_in_hPa: 1002,
  },
  {
    name: "paris",
    date_and_time: "02/08/2022 ,09:50:45",
    description: "sunny",
    humidity_in_percent: 60,
    temperature_in_celsius: 16,
    pressure_in_hPa: 1008,
  },
  {
    name: "tokyo",
    date_and_time: "02/08/2023 ,09:50:45",
    description: "thunderstorm",
    humidity_in_percent: 85,
    temperature_in_celsius: 10,
    pressure_in_hPa: 999,
  },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/weather/:name", (req, res) => {
  // Reading isbn from the URL
  const name = req.params.name;

  // Searching books for the isbn
  for (let city of data) {
    if (city.name === name) {
      res.json(city);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send("Book not found");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
