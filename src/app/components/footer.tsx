export default function Footer() {
  return (
    <div className="flex flex-row h-9 w-screen bg-sky-600/75 shadow-sm text-sm border-0 justify-around items-center text-slate-100">
      <h1>© 2024 RIKVA</h1>
      <button
        onClick={() =>
          (window.location.href = "https://github.com/kevin-ink/rikva")
        }
        className="hover:text-slate-200"
      >
        Source Code
      </button>
    </div>
  );
}
