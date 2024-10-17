import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/HMIS")
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err}`);
    })
}

const createCollection = async (collectionName) => {
    const database = await mongoose.connection.useDb();
    await database.createCollection(collectionName)
    .then(() => {
        console.log(`Collection named ${collectionName} created!`);
    })
    .catch((err) => {
        console.log(`Error creating collection: ${err}`);
    })
}

const checkForCollection = async (collectionName) => {
    const database = await mongoose.connection.useDb();
    const dbCollections = await database.collections();
    const requiredCollection = dbCollections.filter((collection) => collection.name == collectionName);
    if (!requiredCollection) {
        createCollection(collectionName);
    }
    console.log("Collection already exists!");
}

export default {connectDB, createCollection, checkForCollection};