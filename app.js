const mongoose = require("mongoose");

//
const url = "mongodb://localhost:27017/fruitsDB";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check data entry for a name"],
  },
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Solid fruit",
});
// apple.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "A great fruit",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 6,
//   review: "Juicy",
// });

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Totally appealing",
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully added the 3 fruits to fruitsDB");
//   }
// });

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();

//     // console.log(fruits);
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.updateOne(
//   { _id: "6020623de5d544347429189b" },
//   { name: "Peach" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the item");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "6020623de5d544347429189b" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted item");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);
// const person = new Person({
//   name: "Sebastian F",
//   age: 30,
//   favoriteFruit: apple,
// });
// person.save();

Person.updateOne({ name: "Seb F" }, { favoriteFruit: banana }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated persons favorite fruit");
  }
});

// Person.deleteMany({ name: "Seb F" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted item");
//   }
// });
