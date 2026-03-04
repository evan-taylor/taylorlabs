import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taylor Labs",
  description:
    "Taylor Labs builds websites and software for startups and small businesses.",
};

const services = [
  {
    title: "Websites",
    items: [
      { primary: "Landing pages", secondary: "marketing sites" },
      { primary: "Company sites", secondary: "brand refreshes" },
      { primary: "Content updates", secondary: "ongoing support" },
    ],
  },
  {
    title: "Product Development",
    items: [
      { primary: "Web apps", secondary: "internal tools" },
      { primary: "MVP builds", secondary: "new ideas" },
      { primary: "Integrations", secondary: "APIs and automation" },
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-zinc-950">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70rem_35rem_at_8%_-8%,rgba(16,185,129,0.12),transparent_62%),radial-gradient(60rem_36rem_at_92%_10%,rgba(39,39,42,0.34),transparent_60%)]" />
        <div className="tl-grain absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <header className="tl-reveal" style={{ animationDelay: "20ms" }}>
          <h1 className="font-semibold text-4xl text-white tracking-tight md:text-5xl">
            Taylor Labs
          </h1>
          <p className="mt-4 text-zinc-300">
            We design and build websites and software for startups and small
            businesses.
          </p>
          <p className="mt-8 max-w-2xl text-lg text-zinc-100 leading-relaxed">
            Simple process, direct communication, and steady progress.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-2 text-zinc-300">
            Contact{" "}
            <a
              className="tl-link inline-flex min-h-11 items-center"
              href="mailto:hello@taylorlabs.co"
            >
              hello@taylorlabs.co
            </a>{" "}
            or{" "}
            <a
              className="tl-link inline-flex min-h-11 items-center"
              href="tel:+13602071844"
            >
              (360) 207-1844
            </a>
            .
          </p>
        </header>

        <section
          className="tl-reveal mt-16 border-zinc-800 border-t pt-10"
          style={{ animationDelay: "90ms" }}
        >
          <h2 className="font-medium text-xs text-zinc-400 uppercase tracking-[0.14em]">
            Services
          </h2>
          <div className="mt-5 space-y-8">
            {services.map((service) => (
              <article key={service.title}>
                <h3 className="font-semibold text-lg text-white">
                  {service.title}
                </h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {service.items.map((item) => (
                    <li key={item.primary}>
                      <span className="tl-service-row inline-flex items-baseline gap-2 text-zinc-200">
                        <span>{item.primary}</span>
                        <span className="tl-service-meta text-zinc-500">
                          — {item.secondary}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="tl-reveal mt-16 border-zinc-800 border-t pt-10"
          style={{ animationDelay: "140ms" }}
        >
          <h2 className="font-medium text-xs text-zinc-400 uppercase tracking-[0.14em]">
            Contact
          </h2>
          <p className="mt-4 flex flex-wrap items-center gap-3 text-zinc-300">
            <a
              className="tl-link inline-flex min-h-11 items-center"
              href="mailto:hello@taylorlabs.co"
            >
              hello@taylorlabs.co
            </a>{" "}
            <span aria-hidden className="text-zinc-600">
              ·
            </span>
            <a
              className="tl-link inline-flex min-h-11 items-center"
              href="tel:+13602071844"
            >
              (360) 207-1844
            </a>
          </p>
        </section>

        <footer
          className="tl-reveal mt-16 border-zinc-800 border-t pt-10 text-sm text-zinc-500"
          style={{ animationDelay: "180ms" }}
        >
          <p>2261 Market Street STE 86329</p>
          <p className="mt-1">San Francisco, CA 94114</p>
          <p className="mt-2">© 2026 Taylor Labs. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
