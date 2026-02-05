export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-black px-3 py-2 text-center text-sm font-semibold text-white">
        <a
          href="https://wa.me/355696140516?text=Pershendetje%2C%20si%20mund%20te%20shes%20tek%20ju%3F"
          target="_blank"
          rel="noopener"
          className="underline-offset-2 hover:underline"
        >
         Ke produkte për të shitur? Shkruaj në WhatsApp
        </a>
      </div>

      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button className="text-2xl" aria-label="Menu">☰</button>

          <div className="text-center">
            <div className="text-lg font-semibold tracking-wide">SOIRA</div>
          </div>

          <div className="flex items-center gap-4 text-2xl">
            <button aria-label="Search">⌕</button>
            <button aria-label="Cart">👜</button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex gap-4 overflow-x-auto">
            {[
  { title: "WOMEN", img: "https://picsum.photos/seed/soira-women/200" },
  { title: "MEN", img: "https://picsum.photos/seed/soira-men/200" },
  { title: "SHOES", img: "https://picsum.photos/seed/soira-shoes/200" },
  { title: "ACCESSORIES", img: "https://picsum.photos/seed/soira-acc/200" },
].map((c) => (
  <button
    key={c.title}
    className="flex min-w-[96px] flex-col items-center gap-2"
    type="button"
  >
    <div className="h-16 w-16 overflow-hidden rounded-2xl border bg-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.img}
        alt={c.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="text-xs font-semibold tracking-wide">{c.title}</div>
  </button>
))}

          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="mb-4 text-center text-2xl font-semibold">COLLECTIONS</h1>

        <div className="grid grid-cols-2 gap-4">
          {[
            "TË REJA",
            "ULJE",
            "FUSTANE",
            "SETE | KOSTUME",
            "KËMISHA",
            "BLUZA | GOLFE",
            "XHUPA",
            "PANTALLONA",
            "SHOES",
            "AKSESORË",
          ].map((c) => (
            <div key={c} className="overflow-hidden rounded-lg border">
              <div className="aspect-[3/4] w-full bg-gray-100" />
              <div className="p-3 text-center text-sm font-semibold">{c}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
