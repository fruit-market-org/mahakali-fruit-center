import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <LogoMark className="h-16 w-16 text-ink" />
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
        This page is out of season
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-moss">
        The page you were looking for is not on our counter. Try our fruit range
        instead, or send us a message.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-leaf/40 hover:text-leaf"
        >
          Back to home
        </Link>
        <WhatsAppButton />
      </div>
    </section>
  );
}
