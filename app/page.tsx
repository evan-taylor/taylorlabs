import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { FooterWordmark } from "@/components/shaders/footer-wordmark";
import { HeroBackdrop } from "@/components/shaders/hero-backdrop";
import { LogoMark } from "@/components/shaders/logo-mark";

export const metadata: Metadata = {
  title: "Taylor Labs",
  description:
    "Taylor Labs builds websites and software for startups and small businesses.",
};

const EMAIL = "hello@taylorlabs.co";
const PHONE_DISPLAY = "(360) 207-1844";
const PHONE_HREF = "tel:+13602071844";

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

const work = {
  eyebrow: "Client site · Health & safety training",
  title: "Taylored Instruction",
  description:
    "A marketing and class-registration site for a CPR, lifeguard, and instructor-certification provider serving Washington and California — organized around their American Heart Association and American Red Cross course catalog.",
  quote: "Safety tailored to your needs.",
  href: "https://tayloredinstruction.com/",
  domain: "tayloredinstruction.com",
} as const;

const product = {
  eyebrow: "Our product",
  badge: "Private beta",
  title: "Soljio",
  description:
    "Swim school software for growing programs — scheduling, rosters, family access, and skill-progress tracking in one place, so teams run every lesson with less admin.",
  quote: "Run every lesson with less admin.",
  href: "https://soljio.com/",
  domain: "soljio.com",
} as const;

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
] as const;

const Brand = ({ size = 26 }: { size?: number }) => (
  <span className="flex items-center gap-2.5">
    <LogoMark size={size} />
    <span className="whitespace-nowrap font-semibold text-[0.95rem] text-white tracking-tight">
      Taylor Labs
    </span>
  </span>
);

const SectionLabel = ({ index, label }: { index: string; label: string }) => (
  <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.2em]">
    <span className="text-sky-400">{index}</span>
    <span className="h-px w-8 bg-white/15" />
    <span className="text-zinc-400">{label}</span>
  </div>
);

const ShowcaseCard = ({
  eyebrow,
  badge,
  title,
  description,
  quote,
  href,
  domain,
}: {
  eyebrow: string;
  badge?: string;
  title: string;
  description: string;
  quote: string;
  href: string;
  domain: string;
}) => (
  <a
    className="tl-lift group block rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
      <div className="md:col-span-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[0.7rem] text-sky-300 uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
          {badge ? (
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 font-medium text-[0.7rem] text-sky-200">
              {badge}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-heading font-semibold text-2xl text-white tracking-tight md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-[54ch] text-pretty text-base text-zinc-400 leading-relaxed">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-sm text-white transition-colors duration-200 group-hover:text-sky-300">
          {domain}
          <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
        </span>
      </div>
      <div className="md:col-span-5">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0e]">
          <div className="flex items-center gap-1.5 border-white/10 border-b px-3.5 py-3">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="ml-2 truncate font-mono text-[0.7rem] text-zinc-500">
              {domain}
            </span>
          </div>
          <div className="flex min-h-36 items-center justify-center bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 p-6">
            <p className="text-balance text-center font-medium text-lg text-zinc-200">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden antialiased">
      {/* Top bar — floating pill */}
      <header className="fixed inset-x-0 top-0 z-50 px-3">
        <div className="mx-auto mt-3 flex max-w-4xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[#09090b]/70 p-2 pl-5 backdrop-blur-xl">
          <a
            aria-label="Taylor Labs home"
            className="flex min-h-11 items-center"
            href="#top"
          >
            <Brand />
          </a>
          <div className="flex items-center gap-1">
            <nav className="hidden items-center sm:flex">
              {navLinks.map((link) => (
                <a
                  className="inline-flex h-9 items-center rounded-full px-3.5 font-medium text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              className="ml-1 inline-flex h-11 items-center rounded-full bg-white px-5 font-medium text-black text-sm transition-colors duration-200 hover:bg-zinc-200"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#09090b]">
              <HeroBackdrop />
            </div>
            <div className="tl-grain absolute inset-0 opacity-30" />
            {/* Readability scrims — strong on the left under the copy, clear on
                the right so the shader stays bold where the mark sits */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/55 to-[#09090b]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/70" />
          </div>

          {/* Living logo, crystallizing out of the gradient on the right */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 -right-24 hidden -translate-y-1/2 opacity-90 lg:block xl:right-0"
          >
            <LogoMark size={460} />
          </div>

          <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
            <div
              className="tl-reveal flex items-center gap-2.5 font-mono text-[0.7rem] text-sky-300 uppercase tracking-[0.22em]"
              style={{ animationDelay: "20ms" }}
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-sky-400" />
              </span>
              Web &amp; software development
            </div>
            <h1
              className="tl-reveal mt-7 max-w-[16ch] text-balance font-heading font-semibold text-5xl text-white tracking-tight sm:text-6xl md:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              We design and build websites and software.
            </h1>
            <p
              className="tl-reveal mt-7 max-w-[46ch] text-pretty text-lg text-zinc-300 leading-relaxed md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              For startups and small businesses. Simple process, direct
              communication, and steady progress.
            </p>
            <div
              className="tl-reveal mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "230ms" }}
            >
              <a
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-medium text-black text-sm shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-12px_rgba(255,255,255,0.5)] transition-colors duration-200 hover:bg-zinc-200"
                href="#contact"
              >
                Start a project
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </a>
              <a
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 font-medium text-sm text-zinc-100 backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]"
                href="#work"
              >
                See our work
                <ArrowDown
                  aria-hidden
                  className="size-4 text-zinc-400 transition-transform duration-200 group-hover:translate-y-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Services — editorial index */}
        <section
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28"
          id="services"
        >
          <SectionLabel index="01" label="Services" />
          <div className="mt-12 border-white/10 border-t">
            {services.map((group, groupIndex) => (
              <div
                className="grid gap-8 border-white/10 border-b py-10 md:grid-cols-12 md:py-14"
                key={group.title}
              >
                <div className="md:col-span-4">
                  <span className="font-mono text-sky-400/60 text-sm">
                    0{groupIndex + 1}
                  </span>
                  <h2 className="mt-3 text-balance font-heading font-semibold text-3xl text-white tracking-tight md:text-4xl">
                    {group.title}
                  </h2>
                </div>
                <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-3 md:col-span-8">
                  {group.items.map((item) => (
                    <li
                      className="group flex flex-col border-white/10 border-t pt-4"
                      key={item.primary}
                    >
                      <span className="font-medium text-base text-white transition-colors duration-200 group-hover:text-sky-300">
                        {item.primary}
                      </span>
                      <span className="mt-1 text-sm text-zinc-500">
                        {item.secondary}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20"
          id="work"
        >
          <SectionLabel index="02" label="Work" />
          <p className="mt-6 max-w-[48ch] text-pretty text-base text-zinc-400">
            A recent site we designed and built.
          </p>
          <div className="mt-10">
            <ShowcaseCard
              description={work.description}
              domain={work.domain}
              eyebrow={work.eyebrow}
              href={work.href}
              quote={work.quote}
              title={work.title}
            />
          </div>
        </section>

        {/* Products */}
        <section
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20"
          id="products"
        >
          <SectionLabel index="03" label="Products" />
          <p className="mt-6 max-w-[48ch] text-pretty text-base text-zinc-400">
            We also build our own software.
          </p>
          <div className="mt-10">
            <ShowcaseCard
              badge={product.badge}
              description={product.description}
              domain={product.domain}
              eyebrow={product.eyebrow}
              href={product.href}
              quote={product.quote}
              title={product.title}
            />
          </div>
        </section>

        {/* Contact */}
        <section
          className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-12 pb-24"
          id="contact"
        >
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] px-6 py-14 md:px-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-20 opacity-50"
            >
              <LogoMark size={340} />
            </div>
            <div className="relative max-w-[34ch]">
              <SectionLabel index="04" label="Contact" />
              <h2 className="mt-7 text-balance font-heading font-semibold text-4xl text-white tracking-tight md:text-5xl">
                Let&apos;s build something.
              </h2>
              <p className="mt-5 text-pretty text-base text-zinc-400 leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll reply with a
                clear next step.
              </p>
            </div>
            <dl className="relative mt-10 grid max-w-xl gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                  Email
                </dt>
                <dd>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center font-medium text-white text-xl transition-colors duration-200 hover:text-sky-300"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                  Phone
                </dt>
                <dd>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center font-medium text-white text-xl transition-colors duration-200 hover:text-sky-300"
                    href={PHONE_HREF}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden border-white/5 border-t">
        {/* Oversized interactive wordmark — lights up under the cursor */}
        <div className="px-6 pt-14 pb-2">
          <div className="mx-auto max-w-6xl">
            <FooterWordmark />
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-8 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Brand />
            <p className="mt-5 text-sm text-zinc-500 leading-relaxed">
              2261 Market Street STE 86329
              <br />
              San Francisco, CA 94114
            </p>
          </div>
          <p className="text-sm text-zinc-600">
            © 2026 Taylor Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
