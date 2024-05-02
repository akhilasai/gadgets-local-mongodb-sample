const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const { MongoMemoryServer } = require("mongodb-memory-server");
const gadgetModel = require("../models/gadget.model");
require("dotenv").config();

let mongoServer;

/* Establish a MongoDB in-memory server before all tests. */
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true });
});

/* Close the MongoDB in-memory server and database after all tests. */
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

/* Testing the API endpoints. */
describe("GET /api/gadgets", () => {
  it("should return all gadgets if they exists", async () => {
    const Gadget = mongoose.model("Gadget");
    const testGadget1 = new Gadget({
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    });
    await testGadget1.save();
    const testGadget2 = new Gadget({
      itemName: "Mobile",
      brandName: "Vivo",
      units: 5,
      price: 13000,
    });
    await testGadget2.save();
    const res = await request(app).get("/api/gadgets");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it("should return 404 if no gadget exists", async () => {
    await mongoose.connection.dropDatabase();
    const res = await request(app).get("/api/gadgets");
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("No Gadget found");
  });

  it("should return 500 if error", async () => {
    const findMock = jest
      .spyOn(gadgetModel, "find")
      .mockRejectedValueOnce("Error Occured :(");

    const res = await request(app).get("/api/gadgets");
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe("Error Occured :(");
  });
});

describe("GET /api/gadget/:id", () => {
  it("should return the gadget when it exists", async () => {
    const Gadget = mongoose.model("Gadget");
    const testGadget1 = new Gadget({
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    });
    await testGadget1.save();

    const res = await request(app).get(`/api/gadget/${testGadget1._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.itemName).toBe("Washing Machine");
  });

  it("should return 404 if the gadget do not exists", async () => {
    const Gadget = mongoose.model("Gadget");
    const testGadget1 = new Gadget({
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    });

    const res = await request(app).get(`/api/gadget/${testGadget1._id}`);
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("Gadget not found");
  });

  it("should return 500 if error", async () => {
    const findMock = jest
      .spyOn(gadgetModel, "findById")
      .mockRejectedValueOnce("Error Occured :(");

    const Gadget = mongoose.model("Gadget");
    const testGadget1 = new Gadget({
      itemName: "Washing Machine",
      brandName: "LG",
      units: 3,
      price: 15000,
    });
    await testGadget1.save();

    const res = await request(app).get(`/api/gadget/${testGadget1._id}`);
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe("Error Occured :(");
  });
});
