export default function StatTile({ label, value, pulse = false }) {
  return (
    <div className="flex justify-between text-[9px] uppercase font-mono">
      <span className="opacity-70 text-muted-foreground">{label}</span>
      <span className="text-foreground flex items-center gap-1.5">
        {pulse && <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />}
        {value}
      </span>
    </div>
  );
}
