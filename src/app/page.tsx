
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ScanSearch,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understand whether your work addresses every requirement in the assignment instructions.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Evidence-Based Feedback",
    description:
      "See which parts of your work meet the criteria, with specific evidence from your own text.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "AI Recommendations",
    description:
      "Get practical suggestions to improve your work and understand what needs attention.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EEEEEE]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167D8D] text-white">
            <BookOpenCheck size={21} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#071B2B]">
            TugasTilik<span className="text-[#167D8D]">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 text-sm text-[#647985] md:flex">
          <a href="#how-it-works" className="transition hover:text-[#167D8D]">
            How it works
          </a>
          <a href="#features" className="transition hover:text-[#167D8D]">
            Features
          </a>
          <a href="#about" className="transition hover:text-[#167D8D]">
            About
          </a>
        </div>

        <Link
          href="/evaluate"
          className="group flex items-center gap-2 rounded-full bg-[#071B2B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#167D8D]"
        >
          Try TugasTilik
          <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#B9E4E8]/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#B9E4E8]/30 blur-3xl" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B9E4E8] bg-white/70 px-4 py-2 text-xs font-medium text-[#167D8D]">
              <Sparkles size={14} />
              Your AI-powered assignment reviewer
              <span className="rounded-full bg-[#B9E4E8]/50 px-2 py-0.5 text-[10px]">
                BETA
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#071B2B] md:text-6xl lg:text-7xl">
              Your assignment deserves{" "}
              <span className="text-[#167D8D]">a second look.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#647985] md:text-lg">
              Before you hit submit, make sure your work meets the
              requirements. Get meaningful feedback and discover what
              you might have missed.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/evaluate"
                className="group flex items-center gap-3 rounded-xl bg-[#167D8D] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#167D8D]/20 transition hover:-translate-y-1 hover:bg-[#071B2B]"
              >
                Review my assignment
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-[#DCE5E8] bg-white/70 px-7 py-4 text-sm font-medium text-[#071B2B] transition hover:border-[#167D8D]"
              >
                Explore how it works
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-[#647985]">
              <ShieldCheck size={19} className="text-[#167D8D]" />
              <span>Built to support learning, not replace it.</span>
            </div>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#B9E4E8]/50 blur-2xl" />

            <div className="relative rotate-1 rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-[#071B2B]/10">
              <div className="flex items-center justify-between border-b border-[#DCE5E8] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#071B2B]">
                      Assignment Review
                    </p>
                    <p className="text-xs text-[#647985]">
                      Research methodology
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#B9E4E8]/50 px-3 py-1 text-xs font-medium text-[#167D8D]">
                  Preview
                </span>
              </div>

              <div className="py-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#647985]">
                  Evaluation overview
                </p>

                <div className="mt-5 space-y-5">
                  {[
                    ["Research objectives", "Met", 100],
                    ["Literature review", "Partial", 65],
                    ["Research methods", "Met", 100],
                  ].map(([name, status, value]) => (
                    <div key={name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-[#071B2B]">
                          {name}
                        </span>
                        <span className="text-xs text-[#167D8D]">
                          {status}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#EEEEEE]">
                        <div
                          className="h-full rounded-full bg-[#167D8D]"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#EEEEEE] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#071B2B]">
                  <Sparkles size={16} className="text-[#167D8D]" />
                  AI Insight
                </div>
                <p className="mt-2 text-sm leading-6 text-[#647985]">
                  Your literature review could use more recent references
                  to better support the research background.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-[#647985]">
                <CheckCircle2 size={15} className="text-[#167D8D]" />
                Feedback based on assignment criteria
              </div>
            </div>

            <div className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-[#DCE5E8] bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#071B2B]">
                    Learn as you improve
                  </p>
                  <p className="text-[11px] text-[#647985]">
                    Every revision has a purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-[#DCE5E8] bg-white px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#167D8D]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071B2B] md:text-4xl">
              More than just an AI checker.
            </h2>
            <p className="mt-4 leading-7 text-[#647985]">
              Understand your work, identify the gaps, and improve with
              purpose before submitting.
            </p>
          </div>

          <div
            id="features"
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group rounded-2xl border border-[#DCE5E8] bg-[#EEEEEE]/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B9E4E8] hover:bg-white hover:shadow-xl hover:shadow-[#071B2B]/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D] transition group-hover:bg-[#167D8D] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm text-[#A1B2B9]">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-[#071B2B]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#647985]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-6 py-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071B2B] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#167D8D]/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#167D8D]/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#167D8D] text-white">
              <Sparkles size={23} />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ready to give your work a second look?
            </h2>

            <p className="mt-4 leading-7 text-[#B9E4E8]">
              A little review can make a meaningful difference.
              Start improving your assignment today.
            </p>

            <Link
              href="/evaluate"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#B9E4E8] px-7 py-4 text-sm font-semibold text-[#071B2B] transition hover:bg-white"
            >
              Get started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DCE5E8] bg-white px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-[#647985] md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpenCheck size={17} className="text-[#167D8D]" />
            <span className="font-semibold text-[#071B2B]">TugasTilik</span>
            <span>© 2026</span>
          </div>
          <p>Built for students. Designed for better learning.</p>
        </div>
      </footer>
    </main>
  );
}
