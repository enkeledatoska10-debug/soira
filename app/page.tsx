"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type MenuSection = {
  title: string;
  items: { label: string; slug: string }[];
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("FEMRA");

  const menu: MenuSection[] = useMemo(
    () => [
      {
        title: "FEMRA",
        items: [
          { label: "Të reja", slug: "te-rejat" },
          { label: "Fustane", slug: "fustane" },
          { label: "Sete & Kostume", slug: "sete-kostume" },
          { label: "Xhupa & Pallto", slug: "xhupa-pallto" },
          { label: "Pantallona", slug: "pantallona" },
        ],
      },
      {
        title: "MESHKUJ",
        items: [
          { label: "Të reja", slug: "te-rejat-meshkuj" },
          { label: "Xhaketa", slug: "xhaketa" },
          { label: "Bluza", slug: "bluza" },
          { label: "Pantallona", slug: "pantallona-meshkuj" },
          { label: "Tuta", slug: "tuta" },
        ],
      },
      {
        title: "SHOES",
        items: [
          { label: "Atlete", slug: "atlete" },
          { label: "Take", slug: "take" },
          { label: "Sandale", slug: "sandale" },
          { label: "Cizme", slug: "cizme" },
        ],
      },
      {
        title: "AKSESORË",
        items: [
          { label: "Bizhuteri", slug: "bizhuteri" },
          { label: "Syze", slug: "syze" },
          { label: "Rripa", slug: "rripa" },
          { label: "Çadra", slug: "cadra" },
        ],
      },
    ],
    []
  );

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

      {/* ===== MENU ANËSORE (Drawer) ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* overlay */}
          <button
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          {/* drawer */}
          <aside className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <div className="text-lg font-semibold tracking-wide">SOIRA</div>
              <button
                aria-label="Close menu"
                className="text-2xl leading-none"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="p-2">
              {menu.map((sec) => {
                const isOpen = openSection === sec.title;
                return (
                  <div key={sec.title} className="border-b">
                    <button
                      className="flex w-full items-center justify-between px-3 py-4 text-left text-base font-semibold"
                      onClick={() =>
                        setOpenSection((prev) => (prev === sec.title ? null : sec.title))
                      }
                      type="button"
                    >
                      <span>{sec.title}</span>
                      <span className="text-xl">{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="pb-3">
                        {sec.items.map((it) => (
                          <Link
                            key={it.slug}
                            href={`/kategori/${it.slug}/`}

                            className="block px-5 py-3 text-sm hover:bg-gray-100"
                            onClick={() => setMenuOpen(false)}
                          >
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 px-3 pb-2">
                <Link
                  href="/account"
                  className="block rounded-lg border px-4 py-3 text-sm font-semibold text-center hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Account
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* HEADER */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            className="text-2xl"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <div className="text-lg font-semibold tracking-wide">SOIRA</div>

          <div className="flex items-center gap-4 text-2xl">
           <Link aria-label="Search" href="/search/">
  ⌕
</Link>


            <Link aria-label="Account" href="/account">
              👤
            </Link>
            <Link aria-label="Cart" href="/cart">
              👜
            </Link>
          </div>
        </div>

        {/* 4 IKONAT NË KRYE */}
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex gap-5 overflow-x-auto py-2">
            {[
              { title: "WOMEN", slug: "femra", img: "https://picsum.photos/seed/soira-women/200" },
              { title: "MEN", slug: "meshkuj", img: "https://picsum.photos/seed/soira-men/200" },
              { title: "SHOES", slug: "shoes", img: "https://picsum.photos/seed/soira-shoes/200" },
              { title: "ACCESSORIES", slug: "aksesore", img: "https://picsum.photos/seed/soira-acc/200" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/kategori/${c.slug}/`}
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
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/soira-hero/1200/600"
          alt="Hero"
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
          <Link
            href="/te-rejat"
            className="rounded bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            TË REJAT
          </Link>

          <Link
            href="/uljet"
            className="rounded bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            ULJET
          </Link>
        </div>
      </section>

      {/* KOLEKSIONET (Këtu i hoqa ÇANTA + BUKURI) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-wide">
          KOLEKSIONET
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { title: "TË REJA", img: "https://picsum.photos/seed/tereja/800/1000", href: "/te-rejat" },
            { title: "ULJE", img: "https://picsum.photos/seed/ulje/800/1000", href: "/uljet" },
            { title: "FUSTANE", img: "https://picsum.photos/seed/fustane/800/1000", href: "/kategori/fustane" },
            { title: "SETE & KOSTUME", img: "https://picsum.photos/seed/sete/800/1000", href: "/kategori/sete-kostume" },
            { title: "KËPUCË", img: "https://picsum.photos/seed/kepuce/800/1000", href: "/kategori/atlete" },
            { title: "AKSESORË", img: "https://picsum.photos/seed/aksesore/800/1000", href: "/kategori/aksesore" },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative block overflow-hidden"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-3 text-sm font-semibold tracking-wide">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
