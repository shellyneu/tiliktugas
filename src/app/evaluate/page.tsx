
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  ClipboardList,
  FileText,
  Info,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  XCircle,
  LoaderCircle,
} from "lucide-react";

type Criterion = {
  criterion: string;
  status: "met" | "partially_met" | "not_met";
  evidence: string;
  recommendation: string;
};

type Evaluation = {
  overallSummary: string;
  criteria: Criterion[];
  strengths: string[];
  improvementPriorities: string[];
  finalNote: string;
};

export default function EvaluatePage() {
  const [instructions, setInstructions] = useState("");
  const [answer, setAnswer] = useState("");
  const [rubric, setRubric] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);

  async function handleEvaluate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setEvaluation(null);

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          instructions,
          answer,
          rubric,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Evaluation failed.");
      }

      setEvaluation(data.evaluation);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const statusConfig = {
    met: {
      label: "Met",
      icon: CheckCircle2,
      color: "text-emerald-700 bg-emerald-50",
    },
    partially_met: {
      label: "Partially met",
      icon: AlertCircle,
      color: "text-amber-700 bg-amber-50",
    },
    not_met: {
      label: "Not met",
      icon: XCircle,
      color: "text-red-700 bg-red-50",
    },
  };

  return (
    <main className="min-h-screen bg-[#EEEEEE]">
      <nav className="border-b border-[#DCE5E8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167D8D] text-white">
              <BookOpenCheck size={21} />
            </div>
            <span className="text-lg font-bold text-[#071B2B]">
              TugasTilik<span className="text-[#167D8D]">.</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#647985] hover:text-[#167D8D]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9E4E8]/60 text-[#167D8D]">
            <ClipboardList size={27} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#167D8D]">
            Assignment evaluation
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#071B2B] md:text-5xl">
            Let&apos;s review your work.
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-[#647985]">
            Share your assignment instructions and completed work.
            TugasTilik will help you identify what is already covered
            and what still needs improvement.
          </p>
        </div>

        <form onSubmit={handleEvaluate} className="space-y-6">
          {/* Instructions */}
          <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D]">
                <ClipboardList size={21} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#071B2B]">
                  Assignment instructions
                </h2>
                <p className="mt-1 text-sm text-[#647985]">
                  What exactly does your lecturer ask you to do?
                </p>
              </div>
            </div>

            <label htmlFor="instructions" className="mb-2 block text-sm font-medium text-[#071B2B]">
              Instructions <span className="text-[#167D8D]">*</span>
            </label>

            <textarea
              id="instructions"
              required
              minLength={20}
              maxLength={15000}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Paste your assignment instructions here..."
              className="w-full resize-y rounded-xl border border-[#DCE5E8] bg-[#EEEEEE]/40 px-4 py-4 text-sm leading-7 text-[#071B2B] outline-none transition placeholder:text-[#9AAAB1] focus:border-[#167D8D] focus:bg-white focus:ring-4 focus:ring-[#B9E4E8]/40"
              rows={5}
            />

            <p className="mt-2 text-right text-xs text-[#647985]">
              {instructions.length.toLocaleString()} / 15,000
            </p>
          </div>

          {/* Answer */}
          <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D]">
                <FileText size={21} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#071B2B]">
                  Your completed work
                </h2>
                <p className="mt-1 text-sm text-[#647985]">
                  Paste the answer or document you want to review.
                </p>
              </div>
            </div>

            <label htmlFor="answer" className="mb-2 block text-sm font-medium text-[#071B2B]">
              Your answer <span className="text-[#167D8D]">*</span>
            </label>

            <textarea
              id="answer"
              required
              minLength={50}
              maxLength={30000}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Paste your completed assignment here..."
              className="w-full resize-y rounded-xl border border-[#DCE5E8] bg-[#EEEEEE]/40 px-4 py-4 text-sm leading-7 text-[#071B2B] outline-none transition placeholder:text-[#9AAAB1] focus:border-[#167D8D] focus:bg-white focus:ring-4 focus:ring-[#B9E4E8]/40"
              rows={10}
            />

            <p className="mt-2 text-right text-xs text-[#647985]">
              {answer.length.toLocaleString()} / 30,000
            </p>
            <p className="mt-2 text-xs text-[#647985]">
              Supported in this MVP: essays, reports, and case studies.
            </p>
          </div>

          {/* Rubric */}
          <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B9E4E8]/50 text-[#167D8D]">
                <BookOpenCheck size={21} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-[#071B2B]">
                    Assessment rubric
                  </h2>
                  <span className="rounded-full bg-[#EEEEEE] px-3 py-1 text-[10px] text-[#647985]">
                    OPTIONAL
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#647985]">
                  Add your lecturer&apos;s grading rubric for a more specific review.
                </p>
              </div>
            </div>

            <label htmlFor="rubric" className="mb-2 block text-sm font-medium text-[#071B2B]">
              Rubric or evaluation criteria
            </label>

            <textarea
              id="rubric"
              value={rubric}
              maxLength={10000}
              onChange={(e) => setRubric(e.target.value)}
              placeholder="Paste your lecturer's assessment rubric here (if available)..."
              className="w-full resize-y rounded-xl border border-[#DCE5E8] bg-[#EEEEEE]/40 px-4 py-4 text-sm leading-7 text-[#071B2B] outline-none transition placeholder:text-[#9AAAB1] focus:border-[#167D8D] focus:bg-white focus:ring-4 focus:ring-[#B9E4E8]/40"
              rows={4}
            />
          </div>

          <div className="flex gap-3 rounded-xl border border-[#B9E4E8] bg-[#B9E4E8]/30 p-4">
            <Info size={19} className="mt-0.5 shrink-0 text-[#167D8D]" />
            <p className="text-xs leading-6 text-[#345965]">
              AI-generated feedback is intended to support your learning.
              Always review the suggestions critically. TugasTilik does
              not guarantee a particular grade.
            </p>
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#167D8D] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#167D8D]/20 transition hover:bg-[#071B2B] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <LoaderCircle size={19} className="animate-spin" />
                Analyzing your assignment...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Evaluate my assignment
                <ArrowRight size={17} />
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#647985]">
            Powered by Google Gemini AI
          </p>
        </form>

        {/* Evaluation result */}
        {evaluation && (
          <section className="mt-12 space-y-6" aria-live="polite">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#167D8D]">
                Your evaluation
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#071B2B]">
                Here&apos;s what we found.
              </h2>
            </div>

            <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#167D8D]">
                <Sparkles size={18} />
                Overall summary
              </div>
              <p className="mt-4 text-sm leading-7 text-[#647985]">
                {evaluation.overallSummary}
              </p>
            </div>

            <div className="space-y-4">
              {evaluation.criteria.map((item, index) => {
                const config = statusConfig[item.status];
                const StatusIcon = config.icon;

                return (
                  <article
                    key={index}
                    className="rounded-2xl border border-[#DCE5E8] bg-white p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-[#071B2B]">
                        {item.criterion}
                      </h3>
                      <span className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ${config.color}`}>
                        <StatusIcon size={14} />
                        {config.label}
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#647985]">
                          Evidence from your work
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#071B2B]">
                          {item.evidence}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#EEEEEE]/70 p-4">
                        <p className="flex items-center gap-2 text-xs font-semibold text-[#167D8D]">
                          <Sparkles size={14} />
                          Recommendation
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#647985]">
                          {item.recommendation}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-[#071B2B]">
                  <CheckCircle2 size={19} className="text-emerald-600" />
                  Your strengths
                </h3>
                <ul className="mt-4 space-y-3">
                  {evaluation.strengths.map((item, index) => (
                    <li key={index} className="text-sm leading-6 text-[#647985]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#DCE5E8] bg-white p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-[#071B2B]">
                  <AlertCircle size={19} className="text-amber-600" />
                  Improvement priorities
                </h3>
                <ul className="mt-4 space-y-3">
                  {evaluation.improvementPriorities.map((item, index) => (
                    <li key={index} className="text-sm leading-6 text-[#647985]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-[#071B2B] p-6 text-white">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#B9E4E8]">
                <Sparkles size={17} />
                A final note from TugasTilik
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                {evaluation.finalNote}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setEvaluation(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full rounded-xl border border-[#DCE5E8] bg-white px-6 py-4 text-sm font-semibold text-[#071B2B] transition hover:border-[#167D8D]"
            >
              Review another assignment
            </button>
          </section>
        )}
      </section>
    </main>
  );
}
