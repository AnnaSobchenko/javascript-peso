import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Loader from "./loading";
import Footer from "@/components/footer/Footer";

export default function LanguageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header lng={lng} />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer lng={lng} />
    </section>
  );
}
