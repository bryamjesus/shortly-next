import { NavBar } from '@/components/navbar/NavBar';
import { Footer } from '@/components/ui/footer/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>
        <div className="">{children}</div>
      </main>
      <Footer />
    </>
  );
}
