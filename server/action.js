"use server";

import clientPromise from "@/lib/mongo";

export const addUser = async ({ name, email }) => {
  const client = await clientPromise;
  const db = client.db("catchup");
  let bodyObject = { name, email };

  const user = await db.collection("waitlist").findOne(bodyObject);
  if (user) {
    return "Already exist";
  }
  let newTodo = await db.collection("waitlist").insertOne(bodyObject);
  return "Success";
};
