import { db } from "@/db/db";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .then((res) => res[0]);

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password with bcrypt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    await db.insert(users).values({
      id: randomUUID(),
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}