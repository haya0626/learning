import Link from "next/link";
import { AppShell } from "./src/components/layouts/AppShell";

export default function TopPage() {
  return (
    <AppShell title="TOP">
      <p>業務メニュー</p>

      <Link href="/sample1">サンプル一覧１</Link>
    </AppShell>
  );
}