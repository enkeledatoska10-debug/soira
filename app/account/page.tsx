export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-6">Llogaria ime</h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <a
          href="/account/login"
          className="bg-black text-white py-3 text-center rounded font-semibold"
        >
          Kyçu (Login)
        </a>

        <a
          href="/account/register"
          className="border border-black py-3 text-center rounded font-semibold"
        >
          Regjistrohu
        </a>
      </div>
    </div>
  );
}
