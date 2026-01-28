import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin, Award, BookOpen } from 'lucide-react';
import { SectionHeader, Button, Badge, Modal } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { faculty, facultyStats } from '../../data';

function FacultyCard({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-52 xs:w-60 sm:w-72 cursor-pointer group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative aspect-portrait rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 mb-3 sm:mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-6xl font-serif text-neutral-400/50 dark:text-neutral-500/50">
            {member.name.charAt(0)}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <p className="text-white text-xs sm:text-sm">
            Tap to view profile
          </p>
        </div>
      </div>

      <h3 className="font-semibold text-sm sm:text-base text-foreground dark:text-foreground-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {member.name}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
        {member.title}
      </p>
      <p className="text-xs text-primary-600 dark:text-primary-400 mt-0.5 sm:mt-1">
        {member.department}
      </p>
    </div>
  );
}

function FacultyModal({ member, isOpen, onClose }) {
  if (!member) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={member.name}
      description={member.title}
      size="lg"
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center mb-4">
            <span className="text-6xl font-serif text-neutral-400/50 dark:text-neutral-500/50">
              {member.name.charAt(0)}
            </span>
          </div>

          <div className="space-y-2">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a
              href={`https://${member.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-2">
              About
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-2">
              Specialization
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {member.specialization}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-2">
              Education
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {member.education}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground dark:text-foreground-dark mb-3">
              Awards & Recognition
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.awards.map((award) => (
                <Badge key={award} size="sm" variant="primary" icon={Award}>
                  {award}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <div className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                  {member.publications}
                </div>
                <div className="text-xs text-neutral-500">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function Faculty() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [ref, isInView] = useRevealOnScroll();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="faculty" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Faculty"
          title="Learn From the Best"
          description="Our world-renowned faculty includes Nobel laureates, industry pioneers, and thought leaders dedicated to student success."
        />

        <div
          className={`
            grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12
            transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <div className="text-center">
            <div className="text-2xl xs:text-3xl font-bold text-foreground dark:text-foreground-dark">
              {facultyStats.totalFaculty.toLocaleString()}+
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Faculty Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl xs:text-3xl font-bold text-foreground dark:text-foreground-dark">
              {facultyStats.withPhD}%
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">With Terminal Degree</div>
          </div>
          <div className="text-center">
            <div className="text-2xl xs:text-3xl font-bold text-foreground dark:text-foreground-dark">
              {facultyStats.studentFacultyRatio}
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Student-Faculty Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl xs:text-3xl font-bold text-foreground dark:text-foreground-dark">
              {facultyStats.industryExperience}%
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Industry Experience</div>
          </div>
        </div>

        <div ref={ref} className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 text-foreground dark:text-foreground-dark hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors touch-target items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div
            ref={scrollRef}
            className={`
              flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-4 sm:px-12
              transition-all duration-700
              ${isInView ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {faculty.map((member, index) => (
              <div
                key={member.id}
                className="snap-start"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <FacultyCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 text-foreground dark:text-foreground-dark hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors touch-target items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div
          className={`
            mt-12 text-center
            transition-all duration-700 delay-300
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <Button as="a" href="#" variant="outline">
            View All Faculty
          </Button>
        </div>
      </div>

      <FacultyModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}

export default Faculty;
