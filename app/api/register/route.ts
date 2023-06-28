import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  console.log(1);
  const body = await request.json();
  const { email, name, password } = body;
  console.log(2);
  //check if email already exits
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (result) {
    console.log(result);

    return NextResponse.json({ error: "Email already exist" }, { status: 500 });
  }
  console.log(4);
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
