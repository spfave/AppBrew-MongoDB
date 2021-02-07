const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//
const url = "mongodb://localhost:27017/fruitsDB";
const dbName = "fruitsDB";

//
const client = new MongoClient(url);

client.connect((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server!");

  const db = client.db(dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // insertDocuments(db, () => {
  //   client.close();
  // });

  findDocuments(db, () => {
    client.close();
  });
});

const insertDocuments = function (db, callback) {
  const collection = db.collection("fruitsDB");

  collection.insertMany(
    [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "orange", score: 6, review: "Kinda sour" },
      { name: "Banana", score: 9, review: "Good stuff" },
    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      // assert.equal(3, result.ops.lenth);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

const findDocuments = function (db, callback) {
  const collection = db.collection("fruitsDB");

  collection.find({}).toArray(function (err, fruitsDB) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruitsDB);
    callback(fruitsDB);
  });
};
