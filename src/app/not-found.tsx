import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-32">
      <p className="label-mono">404</p>
      <h1 className="mt-4 max-w-2xl text-[2.25rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[3rem]">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-md text-fg-muted">
        The link may be out of date. The work is all one click away.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/projects" variant="secondary">
          View projects
        </Button>
      </div>
      <p className="mt-10 text-[0.9375rem] text-fg-muted">
        Or head straight to{" "}
        <Link href="/contact" className="text-brand underline underline-offset-4">
          contact
        </Link>
        .
      </p>
    </div>
  );
}
