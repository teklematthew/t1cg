import { MongoClient } from "mongodb";

var url = "mongodb://localhost:27017";

export const load = (users) => {
  MongoClient.connect(url, async function (err, db) {
    if (err) throw err;
    var dbo = db.db("users");

    for (let i = 0; i < users.length; i++) {
      const bulk = dbo.collection("users").initializeUnorderedBulkOp();
      bulk
        .find({ id: users[i].id })
        .upsert()
        .update({
          $setOnInsert: {
            id: users[i].id,
            username: users[i].username,
            name: users[i].name,
            email: users[i].email,
            phone: users[i].phoneNumber,
          },
        });
      await bulk.execute();
    }
    db.close();
  });
};
