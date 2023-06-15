import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "email verified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
