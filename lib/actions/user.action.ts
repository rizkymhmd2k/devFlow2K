"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"

export async function getUserById(params: any) {
  try {
    await connectToDatabase();
    console.log('getUserById function called'); // Add this line


    const { userId } = params;
    console.log('Fetching user with ID:', userId); // Add this line
    // const user = await User.findOne({ clerkId: userId });
    const user = await User.findOne({ clerkId: userId }).maxTimeMS(30000); // Set timeout to 30 seconds

    console.log('User found:', user); // Add this line

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}