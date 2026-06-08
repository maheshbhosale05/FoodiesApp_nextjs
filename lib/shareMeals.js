"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const checkInvalidInputText = (text) => !text || text.trim().length === 0;

export const shareMeal = async (preState, formData) => {
  const mealData = {
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image")
  };
  if (
    checkInvalidInputText(mealData.name) ||
    checkInvalidInputText(mealData.email) ||
    checkInvalidInputText(mealData.title) ||
    checkInvalidInputText(mealData.summary) ||
    checkInvalidInputText(mealData.instructions) ||
    !mealData.email.includes("@") ||
    !mealData.image ||
    mealData.image.size === 0
  ) {
    return {
      message: "Invalid input. Please fill in all fields correctly."
    };
  }

  await saveMeal(mealData);
  revalidatePath("/meals");
  redirect("/meals");
};
