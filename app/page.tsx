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

      {/* ===== MENU ANËSORE (Premium Drawer) ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* overlay */}
          <button
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/45"
            onClick={() => setMenuOpen(false)}
          />

          {/* drawer */}
          <aside className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
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
              <div className="px-3 pt-2 pb-3 text-[11px] font-semibold tracking-[0.18em] text-gray-500">
                SHOP
              </div>

              {menu.map((sec) => {
                const isOpen = openSection === sec.title;
                return (
                  <div key={sec.title} className="border-b">
                    <button
                      className="flex w-full items-center justify-between px-3 py-4 text-left text-base font-semibold"
                      onClick={() =>
                        setOpenSection((prev) =>
                          prev === sec.title ? null : sec.title
                        )
                      }
                      type="button"
                    >
                      <span>{sec.title}</span>
                      <span className="text-xl text-gray-700">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-3">
                        {sec.items.map((it) => (
                          <Link
                            key={it.slug}
                            href={`/kategori/${it.slug}/`}
                            className="block rounded-lg px-5 py-3 text-sm hover:bg-gray-100"
                            onClick={() => setMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{it.label}</span>
                              <span className="text-gray-400">›</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-6 px-3 pb-4">
                <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gray-500">
                  SHPEJT
                </div>

                <Link
                  href="/"
                  className="block rounded-xl border px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/account"
                  className="mt-3 block rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Account
                </Link>

                <Link
                  href="/cart"
                  className="mt-3 block rounded-xl border px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Shporta
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
                slug: "shoes",
                img: "https://picsum.photos/seed/soira-shoes/200",
              },
              {
                title: "ACCESSORIES",
                slug: "aksesore",
                img: "https://picsum.photos/seed/soira-acc/200",
              },
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
                <div className="text-xs font-semibold tracking-wide">
                  {c.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION (Premium) */}
      <section className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/soira-hero/1200/600"
          alt="Hero"
          className="h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
          <div className="mb-4 px-4 text-center text-white">
            <div className="text-3xl font-semibold tracking-wide">SOIRA</div>
            <div className="mt-2 text-sm text-white/90">
              Koleksioni i fundit • Përditësuar çdo javë
            </div>
          </div>

          <div className="flex justify-center gap-3 px-4">
            <Link
              href="/te-rejat"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow"
            >
              TË REJAT
            </Link>

            <Link
              href="/uljet"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow"
            >
              ULJET
            </Link>
          </div>
        </div>
      </section>

      {/* KOLEKSIONET */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-wide">
          KOLEKSIONET
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "TË REJA",
              img: "https://picsum.photos/seed/tereja/800/1000",
              href: "/te-rejat",
            },
            {
              title: "ULJE",
              img: "https://picsum.photos/seed/ulje/800/1000",
              href: "/uljet",
            },
            {
              title: "FUSTANE",
              img: "https://picsum.photos/seed/fustane/800/1000",
              href: "/kategori/fustane",
            },
            {
              title: "SETE & KOSTUME",
              img: "https://picsum.photos/seed/sete/800/1000",
              href: "/kategori/sete-kostume",
            },
            {
              title: "KËPUCË",
              img: "https://picsum.photos/seed/kepuce/800/1000",
              href: "/kategori/atlete",
            },
            {
              title: "AKSESORË",
              img: "https://picsum.photos/seed/aksesore/800/1000",
              href: "/kategori/aksesore",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/85 px-5 py-4 text-sm font-semibold tracking-wide backdrop-blur">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER (Coco-style) */}
      <footer className="mt-2 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold tracking-widest">SOIRA</div>
              <p className="mt-4 text-sm text-gray-600">
                Fashion & koleksione të përzgjedhura. Pagesa: Cash on Delivery.
              </p>

              <div className="mt-6 flex gap-4 text-sm font-semibold">
                <span className="cursor-pointer">Instagram</span>
                <span className="cursor-pointer">TikTok</span>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-widest">
                NEWSLETTER
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Merr njoftime për ulje dhe produkte të reja.
              </p>

              <div className="mt-4 flex items-center gap-3 border-b py-2">
                <input
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Email address"
                />
                <button className="text-sm font-semibold">OK</button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Soira. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
