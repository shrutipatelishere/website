'use client';

import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, X, Code2, Layers } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="group gradient-border card-lift cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#111117]">
          {/* Image */}
          <div className="relative aspect-[16/10] img-zoom">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover mix-blend-overlay"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111117] via-transparent to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>

            {/* Year badge */}
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-mono bg-black/30 backdrop-blur-md rounded text-white/70">
                {project.year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#818cf8] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#71717a] mb-3">{project.subtitle}</p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech stack preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-[#1f1f2e] text-[#a1a1aa] rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs bg-[#1f1f2e] text-[#71717a] rounded-md">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Action hint */}
            <div className="flex items-center text-sm text-[#6366f1] font-medium group-hover:text-[#818cf8] transition-colors">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#111117] rounded-2xl border border-[#1f1f2e] shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[21/9]">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111117] via-[#111117]/50 to-transparent" />

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 mb-3">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-lg text-white/70">{project.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#6366f1]" />
                  About This Project
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Two column layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-[#a855f7]" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-[#1f1f2e] text-[#e4e4e7] rounded-lg border border-[#2f2f3e] hover:border-[#6366f1]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.slice(0, 6).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-[#1f1f2e]">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-xl transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#1f1f2e] hover:bg-[#2f2f3e] text-white font-medium rounded-xl border border-[#2f2f3e] transition-colors">
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
