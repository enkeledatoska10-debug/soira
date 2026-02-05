export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-md px-4 py-10">
        <h1 className="text-2xl font-semibold">Regjistrohu</h1>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Emri</label>
            <input className="mt-1 w-full rounded border px-3 py-2" placeholder="Emri" />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input type="email" className="mt-1 w-full rounded border px-3 py-2" placeholder="email@example.com" />
          </div>

          <div>
            <label className="text-sm font-semibold">Fjalëkalimi</label>
            <input type="password" className="mt-1 w-full rounded border px-3 py-2" placeholder="******" />
          </div>

          <button type="button" className="w-full rounded bg-black py-3 font-semibold text-white">
            Regjistrohu
          </button>
        </form>

        <div className="mt-6 text-sm">
          Ke llogari?{" "}
          <a className="font-semibold underline" href="/account/login">
            Kyçu
          </a>
        </div>
      </div>
    </main>
  );
}
