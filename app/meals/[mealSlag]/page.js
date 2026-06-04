import { getMealBySlug } from "@/lib/meals";

import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MealDetails({ params }) {
  const { mealSlag } = await params;
  const meal = await getMealBySlug(mealSlag);

  if (!meal) {
    notFound();
    return;
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1 className={classes.title}>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
}
