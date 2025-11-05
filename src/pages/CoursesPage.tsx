import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COURSES, Course } from "@/config/courses";
import { GraduationCap } from "lucide-react";

const Pill = ({
  active, children, onClick,
}: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200 ${
      active 
        ? "bg-gradient-to-r from-[#ffd500] to-[#fdc500] text-[#00296b] border-[#ffd500] shadow-lg"
        : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
    }`}
  >
    {children}
  </button>
);

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function CoursesPage() {
  const q = useQuery();
  const nav = useNavigate();

  const query  = (q.get("q") || "").toLowerCase();
  const select = q.get("select"); // e.g., 11-accounts
  const cls    = (q.get("class") as "11" | "12" | null) || null;
  const stream = (q.get("stream") as Course["stream"] | null) || null;

  let filtered = COURSES.slice();

  if (select) filtered = filtered.filter(c => c.id === select);
  if (query)  filtered = filtered.filter(c => c.title.toLowerCase().includes(query));
  if (cls)    filtered = filtered.filter(c => String(c.cls) === cls);
  if (stream) filtered = filtered.filter(c => c.stream === stream);

  const setParam = (key: string, value?: string) => {
    const params = new URLSearchParams(window.location.search);
    if (!value) params.delete(key); else params.set(key, value);
    params.delete("select"); // reset direct selection when filtering
    nav(`/courses?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#00296b] via-[#00509d] to-[#003888] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffd500] to-[#fdc500] rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
              <GraduationCap className="w-8 h-8 text-[#00296b]" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Explore Courses</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Choose from our comprehensive programs designed for academic excellence and career success
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Pill active={!cls} onClick={() => setParam("class")}>All Classes</Pill>
          <Pill active={cls === "11"} onClick={() => setParam("class", "11")}>Class 11</Pill>
          <Pill active={cls === "12"} onClick={() => setParam("class", "12")}>Class 12</Pill>

          <span className="mx-2 text-white/30 text-lg">|</span>

          <Pill active={!stream} onClick={() => setParam("stream")}>All Streams</Pill>
          <Pill active={stream === "Commerce"} onClick={() => setParam("stream", "Commerce")}>Commerce</Pill>
          <Pill active={stream === "Maths"} onClick={() => setParam("stream", "Maths")}>Maths</Pill>
          <Pill active={stream === "Science"} onClick={() => setParam("stream", "Science")}>Science</Pill>
        </div>

        {/* Courses List */}
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
              <p className="text-white/70">Try adjusting your filters or search criteria</p>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(c => (
              <article 
                key={c.id} 
                className="rounded-2xl border border-white/20 shadow-2xl p-6 hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/15 hover:scale-105"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-[#ffd500] mb-2">
                  Class {c.cls} • {c.stream}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  {c.short || "Expert faculty • Regular tests • Doubt support • Personal attention"}
                </p>
                <div className="flex gap-3">
                  <a 
                    href={`/apply?course=${c.id}`} 
                    className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-[#ffd500] to-[#fdc500] text-[#00296b] font-bold text-center hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Apply Now
                  </a>
                  <a 
                    href={`/contact?course=${c.id}`} 
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-center hover:bg-white/20 hover:border-white/50 transition-all duration-200"
                  >
                    Know More
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#ffd500] to-[#fdc500] rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-[#00296b] mb-3">Need Guidance Choosing a Course?</h3>
            <p className="text-[#00296b]/80 mb-4">Our academic counselors are here to help you make the right choice</p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-[#00296b] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Talk to Counselor
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}