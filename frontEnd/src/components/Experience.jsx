import AnimateIn from "./AnimateIn";
import ExperienceCard from "./ExperienceCard";
import harenaL from "../assets/img/harena.svg";
import haL from "../assets/img/ha.svg";

const experiences = [
  {
    role: "Assistente de Projetos I",
    company: "Harena Inovação",
    companyLogo: harenaL,
    period: "mar de 2026 — presente",
    description: "Suporte técnico e acompanhamento de projetos de startups de tecnologia, com foco em soluções para a área da saúde. Atuação na validação e reestruturação de APIs, análise de funcionalidades e assistência técnica às equipes no desenvolvimento e evolução de seus produtos.",
    tags: ["Node.js", "AWS", "GCP", "APIs"],
  },
  {
    role: "Jovem Aprendiz",
    company: "Hospital de Amor",
    companyLogo: haL,
    period: "fev de 2025 — mar de 2026",
    description: "Atuação no desenvolvimento, manutenção e suporte de aplicações web e mobile utilizadas em demandas internas da instituição.",
    tags: ["React", "React Native", "PHP", "Python", "MySQL", "Git"],
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <AnimateIn>
        <h2 className="projects-title mb-8">Experiência Profissional</h2>
      </AnimateIn>
      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />
        <div className="space-y-12">
          {experiences.map(({ role, company, companyLogo, period, description, tags }, i) => (
            <AnimateIn key={i} delay={i * 150}>
              <ExperienceCard
                role={role}
                company={company}
                companyLogo={companyLogo}
                period={period}
                description={description}
                tags={tags}
                i={i}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
