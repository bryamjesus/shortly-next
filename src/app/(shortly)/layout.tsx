import { NavBar } from '@/components/navbar/NavBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="w-full text-slate-900">{children}</div>
    </>
  );
}
