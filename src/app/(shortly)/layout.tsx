import { Footer } from '@/components/footer/Footer';
import { NavBar } from '@/components/navbar/NavBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="container text-slate-900">{children}</div>
      <Footer />
    </>
  );
}
