export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="mb-8 flex items-center gap-4 text-3xl font-semibold">
        {title}
        <span className="h-px flex-1 bg-line" aria-hidden />
      </h2>
      {children}
    </section>
  );
}
