import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type Props = {
  params: { slug: string };
};

type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  liveDemo: string;
  github: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
const project: Project | undefined = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <article className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-300">{project.longDescription || project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: string, idx: number) => (
  <span key={idx} className="px-2 py-1 text-sm bg-gray-700 rounded">
    {tech}
  </span>
))}

        </div>

        <div className="flex gap-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded"
          >
            GitHub
          </a>
        </div>
      </article>
    </main>
  );
}
