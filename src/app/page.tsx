import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[208px] w-[526px] bg-orange-500 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Crie sua conta</span> e salve seus
            projetos!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione projetos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href=""
            className="inline-block rounded-full bg-orange-400 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-900 border border-orange-400 hover:bg-transparent hover:text-orange-400 transition-colors"
          >
            CADASTRAR PROJETO
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm leading-relaxed texte-gray-200">
          Inspirado e feito com 🧡 no NLW da Rocketseat
        </p>
      </div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhum projeto, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
