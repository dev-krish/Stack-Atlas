  import NextAuth from "next-auth";
  import GitHub from "next-auth/providers/github";
  import Google from "next-auth/providers/google";

  import { env } from "@/lib/validators/env";

  import { connectDB } from "@/lib/db/mongodb";
  import { User } from "@/models/UserModel";

  export const { handlers, signIn, signOut, auth } =
    NextAuth({
    providers: [
      GitHub({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      }),

      Google({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }),
    ],

    callbacks: {
      async signIn({ user }) {
        try {
          await connectDB();

          const existingUser = await User.findOne({
            email: user.email,
          });

          if (!existingUser) {
            await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
            });
          }

          return true;
        } catch (error) {
          console.error("Sign in error:", error);

          return false;
        }
      },
    },
  });