export default function Pagination() {
  return (
    <nav className="mt-16 flex justify-center items-center gap-4">
      <button
        className="p-2 bg-surface-container text-on-surface-variant rounded-full disabled:opacity-30"
        disabled
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold">
          1
        </button>
        <button className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-bold transition-colors">
          2
        </button>
        <button className="w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-bold transition-colors">
          3
        </button>
      </div>

      <button className="p-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-full transition-colors">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </nav>
  );
}
