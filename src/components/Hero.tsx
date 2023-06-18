export function Hero() {
  return (
    <div className="space-y-5">
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione projetos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        href=""
        className="inline-block rounded-full bg-orange-400 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-900 border border-orange-400 hover:bg-transparent hover:text-orange-400 transition-colors"
      >
        CADASTRAR PROJETO
      </a>
    </div>
  );
}
