import { Copyright } from "@/components/Copyright";
import { EmptyProjects } from "@/components/EmptyProjects";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[208px] w-[526px] bg-orange-500 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        <SignIn />
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col p-16">
        <EmptyProjects />
      </div>
    </main>
  );
}
