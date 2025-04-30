import React, { useState } from 'react';

const projects = [
  {
    title: 'COOG ZOO',
    start: new Date(2024, 7), // Aug 2024
    end: new Date(2024, 10),  // Nov 2024
  },
  {
    title: 'VOLUNTEER MATCHING SYSTEM',
    start: new Date(2024, 7),
    end: new Date(2024, 10),
  },
  {
    title: 'MINECRAFT MOD',
    start: new Date(2024, 4), // May 2024
    end: new Date(2025, 3),   // April 2025
  },
  {
    title: 'PORTFOLIO',
    start: new Date(2025, 2), // March 2025
    end: new Date(2025, 3),   // April 2025
  },
  {
    title: 'HACKATHON | WATT WATCH',
    start: new Date(2025, 3), // April 2025
    end: new Date(2025, 3),   // April 2025
  }
];

// Only use projects with valid start dates
const validProjects = projects.filter(p => p.start instanceof Date && !isNaN(p.start));

let years;
if (validProjects.length) {
  const firstYear = validProjects[0].start.getFullYear();
  years = validProjects.reduce(
    (acc, p) => {
      acc.min = Math.min(acc.min, p.start.getFullYear());
      acc.max = Math.max(acc.max, p.end ? p.end.getFullYear() : p.start.getFullYear());
      return acc;
    },
    { min: firstYear, max: firstYear }
  );
} else {
  years = { min: new Date().getFullYear(), max: new Date().getFullYear() };
}
const yearRange = Array.from({ length: years.max - years.min + 1 }, (_, i) => years.min + i);

const getPosition = (date) => {
  // Returns a percentage position along the timeline for a given date
  const total = years.max - years.min;
  if (total === 0) return '50%';
  return `${((date.getFullYear() - years.min) / total) * 100}%`;
};

const ProjectTimeline = () => {
  const [hidden, setHidden] = useState(Array(validProjects.length).fill(false));

  const handleToggle = (idx) => {
    setHidden((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  if (!validProjects.length) return <div style={{color: 'red', textAlign: 'center', margin: '2rem'}}>No valid projects to show!</div>;

  // Group projects by year
  const projectsByYear = yearRange.map(year =>
    validProjects.filter(p => p.start.getFullYear() === year)
  );

  return (
    <section className="section" id="timeline">
      <h2>Project Timeline</h2>
      <div className="timeline-horizontal-outer">
        <div className="timeline-horizontal-line">
          {/* Stacked bubbles for each year */}
          {yearRange.map((year, yearIdx) => (
            <div
              key={year + '-' + yearIdx}
              className="timeline-year-group"
              style={{ left: getPosition(new Date(year, 0)) }}
            >
              <div className="timeline-bubble-stack">
                {projectsByYear[yearIdx].map((proj, idx) => {
                  const globalIdx = validProjects.findIndex(
                    p => p.title === proj.title && p.start.getTime() === proj.start.getTime()
                  );
                  return (
                    <div
                      key={proj.title + '-' + idx}
                      className="timeline-bubble-container bubble-up"
                    >
                      <div
                        className={`timeline-bubble${hidden[globalIdx] ? ' hidden' : ''}`}
                        onClick={() => handleToggle(globalIdx)}
                        title="Click to hide/show"
                      >
                        <div className="timeline-bubble-content">
                          <div className="timeline-bubble-title">{proj.title}</div>
                          <div className="timeline-bubble-date">
                            {proj.start.toLocaleString('default', { month: 'short', year: 'numeric' })}
                            {proj.end && proj.end > proj.start ? ` – ${proj.end.toLocaleString('default', { month: 'short', year: 'numeric' })}` : ''}
                          </div>
                        </div>
                        <div className="timeline-bubble-pin" />
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Move year label outside bubble stack for below the line */}
              <div className="timeline-year-label-stacked" />
            </div>
          ))}
          {/* Timeline line */}
          <div className="timeline-horizontal-bar" />
          {/* Year markers below the line */}
          <div className="timeline-years timeline-years-below">
            {yearRange.map((year, idx) => (
              <div key={year + '-' + idx} className="timeline-year-label-stacked-real">
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline; 