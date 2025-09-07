import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taylor Labs | Home",
  description:
    "Taylor Labs brings ideas to life through thoughtful design and code. We create websites and digital solutions for startups, businesses, and people.",
};

/**
 * Renders the Taylor Labs homepage with company information, product highlights, contact options, and a footer.
 *
 * The page includes sections for the company backstory, featured product (SoundSnooze), and multiple ways to get in touch, all styled with a dark theme.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Taylor Labs</h1>
          <p className="text-lg text-gray-300">
            Bringing ideas to life through thoughtful design and code. We create
            websites and digital solutions for startups, businesses, and people.
          </p>
        </header>

        {/* About / The Backstory */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Backstory</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Taylor Labs was founded by Evan Taylor, a Computer Science student
              at California Polytechnic State University (Cal Poly) with a
              passion for building innovative software solutions.
            </p>
            <p>
              Currently, we design and build websites, and provide software
              development services. Our approach combines clean design with
              solid engineering to create digital experiences that work well for
              both users and businesses.
            </p>
          </div>
        </section>

        {/* What We're Good At
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What We're Good At</h2>
          <p className="text-gray-300 mb-8">
            Our expertise spans the full stack, with a focus on crafting beautiful,
            high-performance interfaces and robust backend systems that scale with your needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
            <div>React</div>
            <div>Next.js</div>
            <div>Svelte</div>
            <div>Supabase</div>
            <div>PostgreSQL</div>
            <div>TypeScript</div>
            <div>Python</div>
            <div>Java</div>
            <div>Node.js</div>
            <div>Git</div>
            <div>Figma</div>
            <div>DevOps</div>
          </div>
        </section> */}

        {/* Get In Touch */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions or want to collaborate? We'd love to hear from you!
            Reach out and let's discuss how we can work together.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Email Us
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:hello@taylorlabs.co"
                className="text-gray-300 hover:text-white transition-colors"
              >
                hello[at]taylorlabs[dot]co
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Call or Text Us
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Feel free to call or text us anytime. We're happy to chat either
                way!
              </p>
              <a
                href="tel:+13602071844"
                className="text-gray-300 hover:text-white transition-colors"
              >
                (360) 207-1844
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Location
              </h3>
              <p className="text-gray-300">
                Based in San Luis Obispo, California. Working with people
                everywhere!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm">© 2024 Taylor Labs.</p>
            <p className="text-gray-500 text-sm">
              2261 Market Street #86329, San Francisco, CA 94114
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
