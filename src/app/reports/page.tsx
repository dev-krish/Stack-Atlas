import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";

import { connectDB } from "@/lib/db/mongodb";

import { User } from "@/models/UserModel";
import { Report } from "@/models/Report";

export default async function ReportsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  await connectDB();

  const dbUser = await User.findOne({
    email: session.user.email,
  });

  const reports = await Report.find({
    userId: dbUser._id,
  }).sort({
    createdAt: -1,
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Reports
        </h1>

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report._id.toString()}
              className="border rounded-lg p-4"
            >
              <h2 className="font-semibold text-lg">
                {report.repositoryName ||
                "Unknown Repository"}
            </h2>
            <p className="text-sm text-muted-foreground">
                {report.repositoryUrl}
            </p>
              <p className="text-sm text-muted-foreground">
                {report.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}