"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"

// export async function getUserById(params: any) {
//   try {
//     connectToDatabase();
//     console.log('getUserById function called'); // Add this line


//     const { userId } = params;
//     console.log('Fetching user with ID:', userId); // Add this line
//     // const user = await User.findOne({ clerkId: userId });
//     const user = await User.findOne({ clerkId: userId }).maxTimeMS(60000); // Set timeout to 30 seconds

//     console.log('User found:', user); // Add this line

//     return user;
//   } catch (error) {
//     console.log('iyaam',error);
//     throw error;
//   }
// }

// Import User and connectToDatabase as needed

export async function getUserById(params: any) {
  try {
    // Ensure you're awaiting the database connection.
    await connectToDatabase();
    console.log('getUserById function called');

    const { userId } = params;
    console.log('Fetching user with ID:', userId);

    // Adjust the timeout for the findOne operation
    const user = await User.findOne({ clerkId: userId }).maxTimeMS(100000); // Set timeout to 60 seconds

    if (user) {
      console.log('User found:', user);
      return user;
    } else {
      console.log('User not found');
      return null; // Return null if the user is not found
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
