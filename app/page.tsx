"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* SIDE MENU (si Perla) */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="text-lg font-semibold">SOIRA</div>
              <button
                className="text-2xl"
                aria-label="Close"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="space-y-6 text-lg">
              <a
                className="flex items-center justify-between"
                href="/kategori/femra"
              >
                FEMRA <span>›</span>
              </a>
              <a
                className="flex items-center justify-between"
                href="/kategori/meshkuj"
              >
                MESHKUJ <span>›</span>
              </a>
              <a
                className="flex items-center justify-between"
                href="/kategori/kepuce"
              >
                KËPUCË <span>›</span>
              </a>
              <a
                className="flex items-center justify-between"
                href="/kategori/aksesore"
              >
                AKSESORË <span>›</span>
              </a>
              <a
                className="flex items-center justify-between"
                href="/kategori/canta"
              >
                ÇANTA <span>›</span>
              </a>
              <a
                className="flex items-center justify-between"
                href="/kategori/bukuri"
              >
                BUKURI <span>›</span>
              </a>

              <div className="pt-6">
                <div className="mb-3 text-xl font-semibold">My Account</div>
                <a
                  className="block rounded bg-black px-4 py-3 text-center font-semibold text-white"
                  href="/account"
                >
                  Log in
                </a>
                <a
                  className="mt-3 block rounded border px-4 py-3 text-center font-semibold"
                  href="/account/register"
                >
                  Register
                </a>
              </div>
            </nav>
          </div>
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
            <button aria-label="Search">⌕</button>

            {/* Account icon */}
            <a href="/account" aria-label="Account">
              👤
            </a>

            {/* Cart icon */}
            <a href="/cart" aria-label="Cart">
              👜
            </a>
          </div>
        </div>

        {/* 4 IKONAT NË KRYE */}
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex gap-5 overflow-x-auto py-2">
            {[
              {
                title: "WOMEN",
                slug: "femra",
                img: "https://picsum.photos/seed/soira-women/200",
              },
              {
                title: "MEN",
                slug: "meshkuj",
                img: "https://picsum.photos/seed/soira-men/200",
              },
              {
                title: "SHOES",
                slug: "kepuce",
                img: "https://picsum.photos/seed/soira-shoes/200",
              },
              {
                title: "ACCESSORIES",
                slug: "aksesore",
                img: "https://picsum.photos/seed/soira-acc/200",
              },
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
                <div className="text-xs font-semibold tracking-wide">
                  {c.title}
                </div>
              </a>
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
          <a
            href="/te-rejat"
            className="rounded bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            TË REJAT
          </a>

          <a
            href="/uljet"
            className="rounded bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            ULJET
          </a>
        </div>
      </section>

      {/* KOLEKSIONET – stil Perla */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-wide">
          KOLEKSIONET
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { title: "TË REJA", img: "https://picsum.photos/seed/tereja/800/1000", href: "/te-rejat" },
            { title: "ULJE", img: "https://picsum.photos/seed/ulje/800/1000", href: "/uljet" },
            { title: "FUSTANE", img: "https://picsum.photos/seed/fustane/800/1000", href: "/kategori/fustane" },
            { title: "SETE & KOSTUME", img: "https://picsum.photos/seed/sete/800/1000", href: "/kategori/sete" },
            { title: "AKSESORË", img: "https://picsum.photos/seed/aksesore/800/1000", href: "/kategori/aksesore" },
            { title: "ÇANTA", img: "https://picsum.photos/seed/canta/800/1000", href: "/kategori/canta" },
          ].map((c) => (
            <a key={c.title} href={c.href} className="group relative block overflow-hidden">
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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
