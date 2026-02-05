export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Shporta</h1>

        <div className="mt-8 rounded border p-6 text-center">
          <p className="text-lg font-semibold">SHPORTA JUAJ ËSHTË BOSHE</p>
          <p className="mt-2 text-sm text-gray-600">
            Ke llogari?{" "}
            <a className="underline" href="/account/login">
              Kyçu
            </a>{" "}
            për të porositur më shpejt.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            Vazhdo blerjet
          </a>
        </div>

        {/* Cash on delivery (info) */}
        <div className="mt-8 rounded border p-5">
          <h2 className="text-sm font-semibold">Pagesa</h2>
          <p className="mt-1 text-sm text-gray-700">
            Pagesa bëhet me <b>Cash on Delivery</b> (pagesë në dorëzim).
          </p>
        </div>
      </div>
    </main>
  );
}
