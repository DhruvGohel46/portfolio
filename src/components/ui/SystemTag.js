export default function SystemTag({ label, value }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
      {label && <span className="text-muted-foreground">{label}</span>}
      <span className="text-foreground font-semibold">{value}</span>
    </div>
  );
}
