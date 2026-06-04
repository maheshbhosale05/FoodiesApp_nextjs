import sql from "better-sqlite3";
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
