const { ObjectId } = require("bson");
const client = require("../model/connectDB");

const getUser = async (req, res) => {
    await client.connect();
    const userCollection = client.db("userDB").collection("users");
    const query = {};
    const cursor = await userCollection.find(query);
    const users = await cursor.toArray();
    res.send(users);
}
const getUserById = async (req, res) => {
    await client.connect();
    const userCollection = client.db("userDB").collection("users");
    const id = req.params;
    if (id) {
        const query = { _id: ObjectId(id) };
        const result = await userCollection.findOne(query);
        res.send(result);
    }
}
const postUser = async (req, res) => {
    await client.connect();
    const userCollection = client.db("userDB").collection("users");
    const userInfo = req.body;
    const result = await userCollection.insertOne(userInfo);
    console.log(`A document was inserted with the _id: ${result.insertedId}`)
    res.send(result);
}
const updateUser = async (req, res) => {
    await client.connect();
    const userCollection = client.db("userDB").collection("users");
    const id = req.params.id;
    const updatedUser = req.body;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const updatedDoc = {
        $set: {
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            address: updatedUser.address
        },
    }
    const result = await userCollection.updateOne(filter, updatedDoc, options);
    res.send(result);
}
const deleteUser = async (req, res) => {
    await client.connect();
    const userCollection = client.db("userDB").collection("users");
    const id = req.params;
    console.log(id);
    const query = { _id: ObjectId(id) };
    console.log(query);
    const result = await userCollection.deleteOne(query);
    if (result.deletedCount === 1) {
        res.send("Successfully deleted one document.");
    } else {
        res.send("No documents matched the query. Deleted 0 documents.");
    }
}

module.exports = { getUser, getUserById, postUser, updateUser, deleteUser };