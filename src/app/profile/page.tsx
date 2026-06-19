import { auth } from "@/lib/auth/auth";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <div className="p-8">
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}