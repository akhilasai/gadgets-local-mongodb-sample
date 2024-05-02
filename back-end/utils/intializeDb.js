const Gadget = require("../models/gadget.model");

const intializeDB = async () => {
  const gadgets = await Gadget.find();
  if (gadgets.length != 0) {
    return;
  }
  const gadgetsArray = [
    {
      id: 1,
      itemName: "Mobile",
      brandName: "Vivo",
      units: 5,
      price: 13000,
    },
    {
      id: 2,
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    },
    {
      id: 3,
      itemName: "Mobile",
      brandName: "MI",
      units: 10,
      price: 10000,
    },
    {
      id: 4,
      itemName: "Washing Machine",
      brandName: "Samsung",
      units: 5,
      price: 25000,
    },
    {
      id: 5,
      itemName: "Smart Watch",
      brandName: "Realme",
      units: 15,
      price: 1300,
    },
    {
      id: 6,
      itemName: "Smart TV",
      brandName: "LG",
      units: 8,
      price: 50000,
    },
    {
      id: 7,
      itemName: "Mobile",
      brandName: "Vivo",
      units: 5,
      price: 13000,
    },
    {
      id: 8,
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    },
    {
      id: 9,
      itemName: "Mobile",
      brandName: "MI",
      units: 10,
      price: 10000,
    },
    {
      id: 10,
      itemName: "Washing Machine",
      brandName: "Samsung",
      units: 5,
      price: 25000,
    },
    {
      id: 11,
      itemName: "Smart Watch",
      brandName: "Realme",
      units: 15,
      price: 1300,
    },
    {
      id: 12,
      itemName: "Smart TV",
      brandName: "LG",
      units: 8,
      price: 50000,
    },
    {
      id: 13,
      itemName: "Mobile",
      brandName: "Vivo",
      units: 5,
      price: 13000,
    },
    {
      id: 14,
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    },
    {
      id: 15,
      itemName: "Mobile",
      brandName: "MI",
      units: 10,
      price: 10000,
    },
    {
      id: 16,
      itemName: "Washing Machine",
      brandName: "Samsung",
      units: 5,
      price: 25000,
    },
    {
      id: 17,
      itemName: "Smart Watch",
      brandName: "Realme",
      units: 15,
      price: 1300,
    },
    {
      id: 18,
      itemName: "Smart TV",
      brandName: "LG",
      units: 8,
      price: 50000,
    },
  ];
  gadgetsArray.forEach(async (e) => {
    let newGaget = new Gadget(e);
    await newGaget.save();
  });
};

module.exports = {
  intializeDB,
};
