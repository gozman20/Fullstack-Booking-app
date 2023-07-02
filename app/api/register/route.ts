import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  //check if email already exits
  const emailExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (emailExist) {
    return NextResponse.json({ error: "Email already exist" }, { status: 500 });
  }

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
