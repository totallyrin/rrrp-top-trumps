"use server";

import { sql } from "@vercel/postgres";

export async function fetchAllCards() {
  try {
    return (
      await sql`
SELECT *, ENCODE(img, 'base64') as image
FROM rrrp_top_trumps_cards
ORDER BY name ASC
`
    ).rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch card data.");
  }
}