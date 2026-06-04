import Link from "next/link";

export default function TopPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl font-bold">業務メニュー</p>

      <Link href="/sample1">サンプル一覧１</Link>
    </div>
  );
}