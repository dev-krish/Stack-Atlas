import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold">
          Welcome, {session.user?.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          StackAtlas Dashboard
        </p>
      </div>
    </DashboardLayout>
  );
}