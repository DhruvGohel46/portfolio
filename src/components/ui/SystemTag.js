export default function SystemTag({ label, value }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-semibold">
      {label && <span className="text-muted-foreground">{label}</span>}
      <span className="text-foreground px-2.5 py-0.5 rounded-md bg-muted border border-border shadow-sm">{value}</span>
    </div>
  );
}
