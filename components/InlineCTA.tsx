import { ScrollToFormButton } from "./ScrollToFormButton";

type InlineCTAProps = {
  title: string;
  text: string;
  tone?: "light" | "dark";
};

export function InlineCTA({ title, text, tone = "light" }: InlineCTAProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={
        isDark
          ? "border-b border-[#263642] bg-[#15202a]"
          : "border-b border-[#b8c9d4] bg-[#eef5f8]"
      }
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p
            className={
              isDark
                ? "text-xl font-semibold leading-7 text-white"
                : "text-xl font-semibold leading-7 text-[#17202a]"
            }
          >
            {title}
          </p>
          <p
            className={
              isDark
                ? "mt-1 text-sm leading-6 text-[#c9d8df]"
                : "mt-1 text-sm leading-6 text-[#53616a]"
            }
          >
            {text}
          </p>
        </div>
        <ScrollToFormButton
          className={
            isDark
              ? "inline-flex w-full shrink-0 items-center justify-center rounded-md bg-white px-5 py-3 text-base font-semibold text-[#15202a] transition hover:bg-[#e7f0f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15202a] sm:w-auto"
              : "inline-flex w-full shrink-0 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:w-auto"
          }
        >
          Eignung prüfen
        </ScrollToFormButton>
      </div>
    </section>
  );
}
