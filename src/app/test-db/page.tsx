import { connectDB } from "@/lib/db/mongodb";

export default async function TestDBPage() {
  await connectDB();

  return (
    <div className="p-8">
      MongoDB Connected Successfully 🚀
    </div>
  );
}