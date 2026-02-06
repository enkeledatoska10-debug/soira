export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-2xl font-semibold">Kërko</h1>
      <p className="mt-2 text-sm text-gray-600">Faqe kërkimi (demo).</p>

      <input
        className="mt-6 w-full rounded border px-4 py-3"
        placeholder="Kërko produkt..."
      />
    </main>
  );
}
