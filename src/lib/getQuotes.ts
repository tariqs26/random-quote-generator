import { eq } from "drizzle-orm";
import db from "@/db/connection";
import { quotes, authors, categories } from "@/db/schema";

export default async function getQuotes() {
  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
      category: categories.category,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  return results;
}
