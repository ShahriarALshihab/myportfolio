import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Shahriar Al Shihab",
    };
  }

  return {
    title: `${project.title} | Shahriar Al Shihab Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Full Stack Case Study`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4ff] dark:bg-[#0a0a0f] text-[#0d1117] dark:text-[#e6edf3]">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <ProjectDetailClient project={project} />
      </main>
      <Footer />
    </div>
  );
}
