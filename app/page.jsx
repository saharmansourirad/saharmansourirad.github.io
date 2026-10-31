import Nav from "../components/Nav";
import Section from "../components/Section";
import Experience from "../components/Experience";
import { profile, skills, education, courses, publications, talks, teaching } from "../data/content";

const initials = profile.name.split(" ").map((w) => w[0]).join("");

export default function Page() {
  return (
    <>
      <Nav name={profile.name} />
      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-10 pt-16 md:grid-cols-[1fr_auto] md:pt-24">
          <div>
            <h1 className="hero-in text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">{profile.name}</h1>
            <p className="hero-in mt-5 font-serif text-xl italic text-accent sm:text-2xl">{profile.title}</p>
            <p className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <div className="hero-in mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#experience" className="rounded-full bg-accent px-5 py-2.5 font-medium text-paper hover:opacity-90">View experience</a>
              <a href="#publications" className="rounded-full border border-line px-5 py-2.5 hover:border-accent hover:text-accent">Read publications</a>
            </div>
          </div>
          <div className="hero-in mx-auto grid h-44 w-44 place-items-center overflow-hidden rounded-full border border-line bg-wash md:h-56 md:w-56">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            ) : (
              <span className="font-serif text-6xl text-accent">{initials}</span>
            )}
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4 font-serif text-lg leading-8">
              {profile.about.map((p) => <p key={p}>{p}</p>)}
            </div>
            <aside className="h-fit rounded-lg border border-line bg-wash p-5">
              <h3 className="mb-3 text-lg font-semibold">Research interests</h3>
              <ul className="space-y-2 text-muted">
                {profile.interests.map((i) => <li key={i} className="border-l-2 border-accent pl-3">{i}</li>)}
              </ul>
            </aside>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="divide-y divide-line border-y border-line">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr]">
                <dt className="font-serif text-lg font-semibold">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {s.items.map((i) => <span key={i} className="rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">{i}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience"><Experience /></Section>

        <Section id="education" title="Education">
          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-semibold">{e.degree}</h3>
                  <span className="text-sm text-muted">{e.period}</span>
                </div>
                <p className="text-accent">{e.school}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted marker:text-accent">{e.notes.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
            ))}
          </div>
          <h3 className="mb-3 mt-10 text-lg font-semibold">Relevant graduate courses</h3>
          <ul className="flex flex-wrap gap-2">
            {courses.map((c) => <li key={c} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{c}</li>)}
          </ul>
        </Section>

        <Section id="publications" title="Publications">
          <ul className="space-y-6">
            {publications.map((p) => (
              <li key={p.title} className="border-l-2 border-accent pl-5">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.authors}</p>
                <p className="mt-1"><span className="font-serif italic">{p.venue}</span> <span className="text-sm text-muted">({p.status})</span></p>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-accent underline underline-offset-4">{p.linkLabel}</a>}
              </li>
            ))}
          </ul>
          <h3 className="mb-3 mt-10 text-lg font-semibold">Selected talks</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-accent">{talks.map((t) => <li key={t}>{t}</li>)}</ul>
        </Section>

        <Section id="teaching" title="Teaching">
          <ul className="grid gap-4 sm:grid-cols-2">
            {teaching.map((t) => (
              <li key={t.role} className="rounded-lg border border-line bg-card p-5">
                <h3 className="font-serif text-lg font-semibold">{t.role}</h3>
                <p className="text-muted">{t.org}</p>
                <p className="mt-1 text-sm text-accent">{t.period}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl font-serif text-lg leading-8">
            I am open to backend engineering roles, research collaborations and PhD opportunities in computational biology. The quickest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-accent px-5 py-2.5 font-medium text-paper hover:opacity-90">{profile.email}</a>
            <a href={`mailto:${profile.academicEmail}`} className="rounded-full border border-line px-5 py-2.5 hover:border-accent hover:text-accent">{profile.academicEmail}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 hover:border-accent hover:text-accent">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 hover:border-accent hover:text-accent">GitHub</a>
          </div>
          <p className="mt-4 text-sm text-muted">Based in {profile.location}</p>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
