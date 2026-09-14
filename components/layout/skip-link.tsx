export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only left-4 top-4 z-[100] rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      Pular para o conteúdo principal
    </a>
  );
}
