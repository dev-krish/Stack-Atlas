import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">
        StackAtlas
      </h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/review">
          Review Repo
        </Link>

        <Link href="/reports">
          Reports
        </Link>

        <Link href="/profile">
          Profile
        </Link>
      </nav>
    </aside>
  );
}