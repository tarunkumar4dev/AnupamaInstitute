// src/components/PopularCourses.tsx
import React from "react";
import { Star, CheckCircle2, BookOpen, Users, Target, Award, Lightbulb, Zap } from "lucide-react";

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex justify-center gap-1 text-amber-400 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-amber-400" />
    ))}
  </div>
);

const Card = ({
  title,
  copy,
  img,
  stats,
  rating = 5,
  quote,
  focus = "object-center",
}: {
  title: string;
  copy: string;
  img: string;
  stats: string[];
  rating?: number;
  quote: string;
  focus?: string;
}) => (
  <div className="group bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-emerald-300">
    <div className="overflow-hidden rounded-2xl mb-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <img
        src={img}
        alt={title}
        className={`w-full h-56 md:h-60 object-cover ${focus} group-hover:scale-105 transition-transform duration-500`}
      />
    </div>
    <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-700 mt-3 leading-relaxed">{copy}</p>
    <StarRow count={rating} />
    <ul className="text-sm text-gray-800 space-y-3 my-5">
      {stats.map((s, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium">{s}</span>
        </li>
      ))}
    </ul>
    <blockquote className="text-sm text-gray-600 italic border-t border-gray-200 pt-4 leading-relaxed">
      "{quote}"
    </blockquote>
  </div>
);

const PopularCourses = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
          <BookOpen className="w-4 h-4" />
          Comprehensive Learning Programs
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-4">
          Our <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Academic Programs</span>
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transformative educational programs designed to illuminate young minds with innovative teaching methodologies 
          and personalized mentorship at Deepjyoti Institute.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Foundation Program (Class 1-8) */}
          <Card
            title="Class 1-8 Foundation Program"
            copy="Build strong academic foundations with emphasis on conceptual clarity and holistic development across all core subjects."
            img="/EB4.jpg"
            focus="object-center"
            stats={[
              "Comprehensive coverage of all core subjects",
              "Interactive activity-based learning approach",
              "Regular progress assessments & feedback",
              "Development of critical thinking skills"
            ]}
            rating={5}
            quote="My child's confidence and interest in learning has grown tremendously. The personalized attention is remarkable."
          />

          {/* Class 9-10 Science & Maths */}
          <Card
            title="Class 9-10 Science & Mathematics"
            copy="Strategic preparation for board examinations with deep conceptual understanding in Science and Mathematics."
            img="/EB2.jpg"
            focus="object-center"
            stats={[
              "Physics, Chemistry, Biology, Mathematics",
              "Hands-on laboratory experiments",
              "Weekly assessment tests",
              "Board exam pattern specialization"
            ]}
            rating={5}
            quote="The systematic approach helped me achieve 96% in boards. Concepts are explained with real-world examples."
          />

          {/* Class 9-10 SST & English */}
          <Card
            title="Class 9-10 SST & English"
            copy="Master Social Sciences and English language skills with emphasis on analytical thinking and effective communication."
            img="/EB5.jpg"
            focus="object-center"
            stats={[
              "History, Geography, Civics, Economics",
              "Advanced English communication skills",
              "Map work & project guidance",
              "Effective answer writing techniques"
            ]}
            rating={4}
            quote="Social Sciences became fascinating with their teaching methods. Scoring 94% was a dream come true."
          />

          {/* Class 11-12 Science */}
          <Card
            title="Class 11-12 Science (PCM/PCB)"
            copy="Comprehensive preparation for board exams and competitive entrance tests with specialized subject experts."
            img="/EB4.jpg"
            focus="object-center"
            stats={[
              "Advanced Physics, Chemistry, Mathematics/Biology",
              "NCERT + competitive exam preparation",
              "Regular performance analytics",
              "Practical laboratory training"
            ]}
            rating={5}
            quote="The faculty's expertise and regular assessments prepared me excellently for both boards and competitive exams."
          />

          {/* Class 11-12 Commerce */}
          <Card
            title="Class 11-12 Commerce"
            copy="Specialized coaching in Commerce subjects with practical business applications and accounting expertise."
            img="/EB3.jpg"
            focus="object-center"
            stats={[
              "Accounts, Economics, Business Studies",
              "Practical accounting applications",
              "Business case studies analysis",
              "Career guidance in commerce fields"
            ]}
            rating={5}
            quote="Accounting concepts that seemed complex became crystal clear. The practical approach is exceptional."
          />

          {/* Class 11-12 Humanities */}
          <Card
            title="Class 11-12 Humanities"
            copy="Comprehensive Humanities program fostering critical thinking, research skills, and analytical abilities."
            img="/EB1.jpg"
            focus="object-center"
            stats={[
              "History, Political Science, Psychology",
              "Geography, Sociology, Economics",
              "Research methodology training",
              "Diverse career path guidance"
            ]}
            rating={4}
            quote="The interdisciplinary approach revealed so many exciting career opportunities I never knew existed."
          />

          {/* English Speaking Course */}
          <Card
            title="English Speaking & Communication"
            copy="Enhance communication skills with focus on fluency, pronunciation, and confident public speaking abilities."
            img="/E8.jpg"
            focus="object-center"
            stats={[
              "Daily interactive speaking sessions",
              "Pronunciation & accent refinement",
              "Group discussions & debates",
              "Personality development workshops"
            ]}
            rating={5}
            quote="From hesitant speaker to confident orator - this course completely transformed my communication skills."
          />

          {/* AI & Python Programming */}
          <Card
            title="AI & Python Programming"
            copy="Introduction to Artificial Intelligence and Python programming for school students with hands-on projects."
            img="/EB2.jpg"
            focus="object-center"
            stats={[
              "Python programming fundamentals",
              "AI/ML concepts & applications",
              "Practical coding projects",
              "Logical problem-solving skills"
            ]}
            rating={4}
            quote="Learning programming early gave me a significant advantage. The project-based approach made it engaging."
          />
        </div>

        {/* Why Choose Deepjyoti Institute Section */}
        <div className="mt-16 bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-10 shadow-2xl border border-emerald-100">
          <h3 className="text-3xl font-black text-gray-900 mb-8">Why Choose Deepjyoti Institute?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Expert Faculty</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Highly qualified educators with proven track records in academic excellence</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Personalized Attention</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Small batch sizes ensuring individual focus and customized learning paths</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Modern Pedagogy</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Innovative teaching methods with digital resources and smart classrooms</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Result-Oriented</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Proven track record of academic excellence and student success stories</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-4">Ready to Illuminate Your Academic Journey?</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Join Deepjyoti Institute and experience transformative education that goes beyond textbooks and examinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-black px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Book Free Demo Class
              </button>
              <button className="bg-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30">
                Download Course Brochure
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              📍 Daani Bhawan, 852 Agarbatti Wali Gali, Palam Village
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;