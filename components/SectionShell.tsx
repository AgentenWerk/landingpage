type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "light" | "white";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "light"
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={
        tone === "white"
          ? "border-b border-[var(--line)] bg-white"
          : "border-b border-[var(--line)] bg-[#f8f7f2]"
      }
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-18">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase text-[var(--accent-dark)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold leading-tight text-[#121a22] sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-7 text-[#4d5961] sm:text-lg sm:leading-8">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
