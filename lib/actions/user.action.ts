"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    console.log('getUserById - User:', user);

    return user;
  } catch (error) {
    console.error('getUserById - Error:', error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    console.log('createUser - New User:', newUser);

    return newUser;
  } catch (error) {
    console.error('createUser - Error:', error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    console.log('updateUser - Updated User:', updatedUser);

    revalidatePath(path);
  } catch (error) {
    console.error('updateUser - Error:', error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });

    console.log('deleteUser - Deleted User:', user);

    if (!user) {
      throw new Error('User not found');
    }

    // Delete user from the database
    // and questions, answers, comments, etc.

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id}).distinct('_id');

    // delete user questions
    await Question.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc.

    const deletedUser = await User.findByIdAndDelete(user._id);

    console.log('deleteUser - Final Deleted User:', deletedUser);

    return deletedUser;
  } catch (error) {
    console.error('deleteUser - Error:', error);
    throw error;
  }
}
