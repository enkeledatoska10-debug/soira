export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-semibold text-center">
          Log in
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded bg-black py-3 text-white font-semibold"
          >
            Log in
          </button>
        </form>
      </div>
    </main>
  );
}
