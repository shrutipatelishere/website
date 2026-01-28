'use client';

import { useState } from 'react';
import {
  ArrowDown,
  Sparkles,
  Code2,
  Palette,
  Rocket,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, categories, stats } from '@/data/projects';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="blob w-[500px] h-[500px] bg-[#6366f1] top-1/4 -left-40" />
        <div className="blob w-[400px] h-[400px] bg-[#a855f7] bottom-1/4 -right-20" style={{ animationDelay: '-5s' }} />
        <div className="blob w-[300px] h-[300px] bg-[#ec4899] top-1/2 left-1/2" style={{ animationDelay: '-10s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f1f2e] rounded-full border border-[#2f2f3e] mb-8">
            <Sparkles className="w-4 h-4 text-[#6366f1]" />
            <span className="text-sm text-[#a1a1aa]">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
            I design and build beautiful, high-performance websites and applications
            that deliver exceptional user experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-[#6366f1]/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#1f1f2e] hover:bg-[#2f2f3e] text-white font-medium rounded-xl border border-[#2f2f3e] transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#1f1f2e]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[#71717a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-[#71717a] hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#1f1f2e] rounded-full text-sm text-[#6366f1] font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
              A selection of my recent work across different industries and technologies.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#6366f1] text-white'
                    : 'bg-[#1f1f2e] text-[#a1a1aa] hover:bg-[#2f2f3e] hover:text-white'
                }`}
              >
                {category.label}
                <span
                  className={`ml-2 ${
                    activeCategory === category.id ? 'text-white/70' : 'text-[#71717a]'
                  }`}
                >
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 bg-[#0f0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual side */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] p-1">
                <div className="w-full h-full rounded-2xl bg-[#111117] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">D</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Developer</h3>
                    <p className="text-[#71717a]">Full Stack Web Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 p-4 bg-[#111117] rounded-xl border border-[#1f1f2e] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="font-bold text-white">3+</div>
                    <div className="text-xs text-[#71717a]">Years Exp</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 p-4 bg-[#111117] rounded-xl border border-[#1f1f2e] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <div className="font-bold text-white">15+</div>
                    <div className="text-xs text-[#71717a]">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#1f1f2e] rounded-full text-sm text-[#a855f7] font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Passionate about creating
                <span className="gradient-text"> impactful</span> digital solutions
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                I&apos;m a full-stack developer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With expertise in modern web technologies, I bring
                ideas to life through clean code and thoughtful design.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed mb-8">
                My journey includes building everything from sleek university websites to comprehensive
                e-commerce platforms and healthcare applications. I believe in continuous learning and
                staying up-to-date with the latest technologies and best practices.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-[#1f1f2e] rounded-xl text-center">
                  <Code2 className="w-6 h-6 text-[#6366f1] mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">Frontend</div>
                </div>
                <div className="p-4 bg-[#1f1f2e] rounded-xl text-center">
                  <Rocket className="w-6 h-6 text-[#a855f7] mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">Backend</div>
                </div>
                <div className="p-4 bg-[#1f1f2e] rounded-xl text-center">
                  <Palette className="w-6 h-6 text-[#ec4899] mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">UI/UX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info side */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#1f1f2e] rounded-full text-sm text-[#ec4899] font-medium mb-4">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s work together on your
                <span className="gradient-text"> next project</span>
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-8">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
                create something amazing together.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1f1f2e] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#71717a]">Email</div>
                    <div className="text-white">hello@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1f1f2e] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#71717a]">Location</div>
                    <div className="text-white">Remote, Worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1f1f2e] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#ec4899]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#71717a]">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1f1f2e] hover:bg-[#2f2f3e] flex items-center justify-center text-[#71717a] hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1f1f2e] hover:bg-[#2f2f3e] flex items-center justify-center text-[#71717a] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1f1f2e] hover:bg-[#2f2f3e] flex items-center justify-center text-[#71717a] hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Form side */}
            <div className="gradient-border p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#a1a1aa] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#1f1f2e] border border-[#2f2f3e] rounded-xl text-white placeholder:text-[#71717a] focus:outline-none focus:border-[#6366f1] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#a1a1aa] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#1f1f2e] border border-[#2f2f3e] rounded-xl text-white placeholder:text-[#71717a] focus:outline-none focus:border-[#6366f1] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-[#a1a1aa] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-[#1f1f2e] border border-[#2f2f3e] rounded-xl text-white placeholder:text-[#71717a] focus:outline-none focus:border-[#6366f1] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-[#a1a1aa] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1f1f2e] border border-[#2f2f3e] rounded-xl text-white placeholder:text-[#71717a] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-[#6366f1]/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1f1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-[#71717a]">Portfolio</span>
            </div>
            <p className="text-sm text-[#71717a]">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-[#71717a] hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-[#71717a] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-[#71717a] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
