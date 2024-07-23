"use server";

import clientPromise from "@/lib/mongo";

export const addUser = async ({ name, email }) => {
  const client = await clientPromise;
  const db = client.db("catchup");
  let bodyObject = { name, email };
  console.log(bodyObject);
  let newTodo = await db.collection("waitlist").insertOne(bodyObject);
  return "Success";
};
