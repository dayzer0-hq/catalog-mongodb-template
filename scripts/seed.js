// seed.js — a tiny, generic collection + seed starter.
// It shows the shape your own work will take: a collection with a $jsonSchema
// validator and a seeded document. It is an EXAMPLE, not part of any brief —
// replace it with your brief's own model.
// Run: mongosh "mongodb://localhost:27017/dayzero" scripts/seed.js

db.examples.drop();

db.createCollection("examples", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "createdAt"],
      properties: {
        name: { bsonType: "string", description: "required string" },
        createdAt: { bsonType: "date", description: "required date" },
      },
    },
  },
});

db.examples.createIndex({ name: 1 }, { unique: true });

db.examples.insertOne({ name: "hello", createdAt: new Date() });

print("seeded examples: " + db.examples.countDocuments() + " document(s)");
