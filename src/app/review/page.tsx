import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ReviewForm from "@/components/review/ReviewForm";

export default async function ReviewPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardLayout>
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold">
            Repository Review
            </h1>

            <p className="text-muted-foreground mt-2">
            Submit a GitHub repository for analysis.
            </p>
        </div>
        <ReviewForm />
    </div>
    </DashboardLayout>
  );
}