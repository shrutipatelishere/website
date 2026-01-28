import { useState, useMemo } from 'react';
import { Check, Calculator, ArrowRight, Info } from 'lucide-react';
import { SectionHeader, Button, Card } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { admissionSteps } from '../../data';

function TimelineStepper({ isInView }) {
  return (
    <div className="relative">
      {admissionSteps.map((step, index) => (
        <div
          key={step.step}
          className={`
            relative flex gap-3 sm:gap-6 pb-8 sm:pb-12 last:pb-0
            transition-all duration-500
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {index < admissionSteps.length - 1 && (
            <div className="absolute left-4 sm:left-5 top-10 sm:top-12 w-0.5 h-full bg-neutral-200 dark:bg-neutral-700" />
          )}

          <div className="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold text-xs sm:text-sm shadow-lg shadow-primary-500/25">
            {step.step}
          </div>

          <div className="flex-1 pt-0.5 sm:pt-1">
            <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-0.5 sm:mb-1">
              {step.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TuitionEstimator({ isInView }) {
  const [programType, setProgramType] = useState('undergraduate');
  const [residency, setResidency] = useState('in-state');
  const [housing, setHousing] = useState('on-campus');

  const estimate = useMemo(() => {
    const baseTuition = {
      'undergraduate': { 'in-state': 28500, 'out-of-state': 52000, 'international': 56000 },
      'graduate': { 'in-state': 32000, 'out-of-state': 48000, 'international': 52000 },
      'doctoral': { 'in-state': 28000, 'out-of-state': 42000, 'international': 46000 },
    };

    const housingCost = {
      'on-campus': 14500,
      'off-campus': 12000,
      'commuter': 3000,
    };

    const tuition = baseTuition[programType]?.[residency] || 0;
    const living = housingCost[housing] || 0;
    const fees = 2800;
    const books = 1200;
    const total = tuition + living + fees + books;
    const avgAid = total * 0.45;

    return {
      tuition,
      living,
      fees,
      books,
      total,
      avgAid,
      netCost: total - avgAid,
    };
  }, [programType, residency, housing]);

  return (
    <Card
      padding="lg"
      className={`
        transition-all duration-700 delay-300
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-1.5 sm:p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
          <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark">
          Tuition & Aid Estimator
        </h3>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2">
            Program Type
          </label>
          <select
            value={programType}
            onChange={(e) => setProgramType(e.target.value)}
            className="input-field"
          >
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate (Masters)</option>
            <option value="doctoral">Doctoral (PhD)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
            Residency Status
          </label>
          <select
            value={residency}
            onChange={(e) => setResidency(e.target.value)}
            className="input-field"
          >
            <option value="in-state">In-State</option>
            <option value="out-of-state">Out-of-State</option>
            <option value="international">International</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
            Housing Preference
          </label>
          <select
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
            className="input-field"
          >
            <option value="on-campus">On-Campus Housing</option>
            <option value="off-campus">Off-Campus Housing</option>
            <option value="commuter">Commuter (Living at Home)</option>
          </select>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-neutral-200 dark:border-neutral-700 space-y-2 sm:space-y-3">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">Tuition</span>
            <span className="font-medium text-foreground dark:text-foreground-dark">
              ${estimate.tuition.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">Room & Board</span>
            <span className="font-medium text-foreground dark:text-foreground-dark">
              ${estimate.living.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">Fees & Books</span>
            <span className="font-medium text-foreground dark:text-foreground-dark">
              ${(estimate.fees + estimate.books).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm sm:text-base pt-2 border-t border-neutral-200 dark:border-neutral-700">
            <span className="font-medium text-foreground dark:text-foreground-dark">
              Total Cost
            </span>
            <span className="font-bold text-foreground dark:text-foreground-dark">
              ${estimate.total.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-green-600 dark:text-green-400">
            <span>Avg. Financial Aid</span>
            <span>-${Math.round(estimate.avgAid).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg pt-2 border-t border-neutral-200 dark:border-neutral-700">
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              Net Cost
            </span>
            <span className="font-bold text-primary-600 dark:text-primary-400">
              ${Math.round(estimate.netCost).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-xs sm:text-sm text-blue-700 dark:text-blue-300">
          <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
          <p>
            This is an estimate. Actual costs vary. 65% of students receive financial aid.
          </p>
        </div>

        <Button as="a" href="#contact" className="w-full justify-center">
          Apply for Financial Aid
        </Button>
      </div>
    </Card>
  );
}

export function Admissions() {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <section id="admissions" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admissions"
          title="Your Journey Begins Here"
          description="We're committed to making world-class education accessible. Learn about our straightforward application process and generous financial aid."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3
              className={`
                text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-6 sm:mb-8
                transition-all duration-500
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Application Timeline
            </h3>
            <TimelineStepper isInView={isInView} />

            <div
              className={`
                mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4
                transition-all duration-700 delay-600
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <Button as="a" href="#contact" size="sm" icon={ArrowRight} iconPosition="right" className="sm:text-base sm:px-6 sm:py-3">
                Start Application
              </Button>
              <Button as="a" href="#" variant="ghost" size="sm" className="sm:text-base sm:px-6 sm:py-3">
                Download Requirements
              </Button>
            </div>
          </div>

          <TuitionEstimator isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

export default Admissions;
