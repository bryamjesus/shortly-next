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
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
