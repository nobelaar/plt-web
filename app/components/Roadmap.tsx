import { roadmapItems } from '../content/site-data';

export function Roadmap() {
  return (
    <div className="relative border-l border-[#00d4ff]/40 pl-8">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#00d4ff] via-[#00d4ff]/40 to-transparent" />
      <ul className="space-y-10">
        {roadmapItems.map((item) => (
          <li key={item.quarter} className="relative">
            <span className="absolute -left-[38px] mt-1 h-3 w-3 rounded-full border border-[#00d4ff] bg-[#0a1b2e]" />
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wide text-[#7de6ff]">{item.quarter}</p>
              <p className="text-xl font-spaceGrotesk text-white">{item.milestone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
