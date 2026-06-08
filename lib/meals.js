import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}

export async function getMealBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  return stmt.get(slug);
}

export async function saveMeal(mealData) {
  const slug = slugify(mealData.title, { lower: true });
  mealData.slug = slug;
  mealData.instructions = xss(mealData.instructions);

  const extension = mealData.image.name.split(".").pop();
  const imageName = `${slug}.${extension}`;
  const imagePath = `public/images/${imageName}`;

  const stream = fs.createWriteStream(imagePath);
  const buffer = await mealData.image.arrayBuffer();
  stream.write(
    Buffer.from(buffer, (error) => {
      if (error) {
        throw new Error("Failed to save image");
      }
    })
  );

  mealData.image = `/images/${imageName}`;

  await db
    .prepare(
      "INSERT INTO meals (creator, creator_email, title, summary, instructions, image, slug) VALUES (@name, @email, @title, @summary, @instructions, @image, @slug)"
    )
    .run(mealData);
}
