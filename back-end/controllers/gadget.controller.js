const { param } = require("../app");
const Gadget = require("../models/gadget.model");

const getAllGadgets = async (req, res) => {
  // Complete this function
  console.log("here");
  try {
    Gadget.find({}).then((result, error) => {
      // console.log(result, error);
      if (!error) {
        if (result.length == 0) {
          res.status(404).send("No Gadget found");
        } else {
          res.status(200).send(JSON.stringify(result))
        }
      }
      else {
        res.status(500).send(error)
      }
    })
  }
  catch (err) {
    res.status(500).send(err)
  }
};

const getGadgetById = async (req, res) => {
  // Complete this function
  let id = req.params.id;
  console.log(req.params);
  try {
    if (id) {
      Gadget.find({_id:id}).then((result, error) => {
        console.log(result,error);
        res.status(200).send(JSON.stringify(result))
      })
    }
    else {
      res.status(404).send("Gadget not found")
    }

  }
  catch (err) {
    res.status(500).send(err)
  }
};

module.exports = {
  getAllGadgets,
  getGadgetById,
};