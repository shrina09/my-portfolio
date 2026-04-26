export default function TerminalWindow({
  children,
  className = "",
  topBarClassName = "",
  contentClassName = "",
  showTopBar = true,
  beforeContent = null,
  redDotClassName = "bg-red-500/90",
  yellowDotClassName = "bg-yellow-500/90",
  greenDotClassName = "bg-green-500/90",
  ...props
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      ].join(" ")}
      {...props}
    >
      {showTopBar && (
        <div
          className={[
            "flex items-center gap-2 border-b border-white/10 px-5 py-3",
            topBarClassName,
          ].join(" ")}
        >
          <span className={["h-3 w-3 rounded-full", redDotClassName].join(" ")} />
          <span className={["h-3 w-3 rounded-full", yellowDotClassName].join(" ")} />
          <span className={["h-3 w-3 rounded-full", greenDotClassName].join(" ")} />
        </div>
      )}

      <div className={contentClassName}>
        {beforeContent}
        {children}
      </div>
    </div>
  );
}
