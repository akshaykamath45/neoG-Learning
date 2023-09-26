//creating instance of express application
const express = require("express");
const app = express();

//res - response from server to client
//req - request helps in getting queries

//server endpoints
// --> /
// --> /about
// --> /contacts
// / :  home page

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2022 },
  { id: 4, make: "Chevrolet", model: "Corvette", year: 2023 },
  { id: 5, make: "Tesla", model: "Model 3", year: 2021 },
  { id: 6, make: "Nissan", model: "Altima", year: 2022 },
  { id: 7, make: "BMW", model: "X5", year: 2023 },
  { id: 8, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 9, make: "Audi", model: "A4", year: 2022 },
  { id: 10, make: "Lexus", model: "RX", year: 2023 },
  { id: 11, make: "Hyundai", model: "Tucson", year: 2021 },
  { id: 12, make: "Kia", model: "Seltos", year: 2022 },
  { id: 13, make: "Mazda", model: "CX-5", year: 2023 },
  { id: 14, make: "Subaru", model: "Outback", year: 2021 },
  { id: 15, make: "Volkswagen", model: "Golf", year: 2022 },
];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.get("/cars", (req, res) => {
  const { make, model } = req.query; // we can access query parameters for filtering
  let filteredCars = cars;
  if (make) {
    filteredCars = cars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }
  if (model) {
    filteredCars = cars.filter(
      (car) => car.model.toLowerCase() === model.toLowerCase()
    );
  }
  res.json(filteredCars);
});

//Postman

//connecting server,port.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});