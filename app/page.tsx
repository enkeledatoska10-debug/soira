export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Top banner */}
      <div className="sticky top-0 z-50 bg-black px-3 py-2 text-center text-sm font-semibold text-white">
        <a
          href="https://wa.me/355696140516?text=Dua%20te%20shes%20tek%20ju"
          target="_blank"
          rel="noopener"
          className="underline-offset-2 hover:underline"
        >
          Ke produkte për të shitur? Shkruaj në WhatsApp
        </a>
      </div>

            {/* HEADER */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button className="text-2xl" aria-label="Menu">☰</button>

          <div className="text-lg font-semibold tracking-wide">SOIRA</div>

          <div className="flex items-center gap-4 text-2xl">
            <button aria-label="Search">⌕</button>
            <button aria-label="Cart">👜</button>
          </div>
        </div>

        {/* 4 IKONAT NË KRYE */}
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex gap-5 overflow-x-auto py-2">
            {[
              { title: "WOMEN", slug: "femra", img: "https://picsum.photos/seed/soira-women/200" },
              { title: "MEN", slug: "meshkuj", img: "https://picsum.photos/seed/soira-men/200" },
              { title: "SHOES", slug: "kepuce", img: "https://picsum.photos/seed/soira-shoes/200" },
              { title: "ACCESSORIES", slug: "aksesore", img: "https://picsum.photos/seed/soira-acc/200" },
            ].map((c) => (
              <a
                key={c.slug}
                href={`/kategori/${c.slug}`}
                className="flex min-w-[120px] flex-col items-center gap-2"
              >
                <div className="h-20 w-20 overflow-hidden rounded-2xl border bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs font-semibold tracking-wide">{c.title}</div>
              </a>
            ))}
          </div>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="relative w-full">
        <img
          src="https://picsum.photos/seed/soira-hero/1200/600"
          alt="Hero"
          className="w-full object-cover h-[420px]"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
          <a
            href="/te-rejat"
            className="bg-white text-black px-5 py-2 text-sm font-semibold rounded"
          >
            TË REJAT
          </a>

          <a
            href="/uljet"
            className="bg-black text-white px-5 py-2 text-sm font-semibold rounded"
          >
            ULJET
          </a>
        </div>
      </section>

      {/* KATEGORITË */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="mb-4 text-center text-2xl font-semibold">
          KATEGORITË
        </h1>

        <div className="flex gap-5 overflow-x-auto">
          {[
  { title: "FEMRA", slug: "femra", img: "https://picsum.photos/seed/femra/200" },
  { title: "MESHKUJ", slug: "meshkuj", img: "https://picsum.photos/seed/meshkuj/200" },
  { title: "KËPUCË", slug: "kepuce", img: "https://picsum.photos/seed/kepuce/200" },
  { title: "AKSESORË", slug: "aksesore", img: "https://picsum.photos/seed/aksesore/200" },
  { title: "ÇANTA", slug: "canta", img: "https://picsum.photos/seed/canta/200" },
  { title: "BUKURI", slug: "bukuri", img: "https://picsum.photos/seed/bukuri/200" },
].map((c) => (
  <a
    key={c.slug}
    href={`/kategori/${c.slug}`}
    className="flex min-w-[120px] flex-col items-center gap-2"
  >
    <div className="h-20 w-20 overflow-hidden rounded-xl border bg-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
    </div>
    <div className="text-xs font-semibold">{c.title}</div>
  </a>
))}

        </div>
      </section>
    </main>
  );
}
