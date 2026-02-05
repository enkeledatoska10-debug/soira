type Props = { params: { slug: string } };

const TITLES: Record<string, string> = {
  femra: "Femra",
  meshkuj: "Meshkuj",
  kepuce: "Këpucë",
  aksesore: "Aksesorë",
  canta: "Çanta",
  bukuri: "Bukuri",
};

export default function KategoriPage({ params }: Props) {
  const title = TITLES[params.slug] ?? params.slug;

  return (
    <main className="min-h-screen bg-white px-4 py-6">
      <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
      <p className="mb-6 text-sm text-gray-600">
        Këtu do të shfaqen produktet për kategorinë: <b>{title}</b>.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <div className="aspect-[3/4] w-full bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${params.slug}-${i}/600/800`}
                alt={`${title} ${i}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3 text-center text-sm font-semibold">
              {title} #{i}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
