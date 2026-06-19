import { signIn } from "@/lib/auth/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          className="rounded border px-4 py-2"
          type="submit"
        >
          Sign in with GitHub
        </button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="rounded border px-4 py-2"
          type="submit"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}