// src/components/PopularCourses.tsx
import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400" />
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
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-blue-100">
    <div className="overflow-hidden rounded-xl mb-5">
      <img
        src={img}
        alt={title}
        className={`w-full h-56 md:h-60 object-cover ${focus}`}
      />
    </div>
    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600 mt-2">{copy}</p>
    <StarRow count={rating} />
    <ul className="text-sm text-slate-700 space-y-2 my-4">
      {stats.map((s, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-[2px]" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
    <blockquote className="text-sm text-slate-500 italic border-t pt-4">
      “{quote}”
    </blockquote>
  </div>
);

const PopularCourses = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-3">Our Academic Programs</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive educational programs designed to nurture young minds with modern teaching methodologies 
          and personalized attention at Chanakya Institute of Education.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Foundation Program (Class 1-8) */}
          <Card
            title="Class 1-8 Foundation Program"
            copy="Strong academic foundation with focus on conceptual understanding and holistic development across all subjects."
            img="/EB4.jpg"
            focus="object-center"
            stats={[
              "All subjects: English, Hindi, Maths, Science, SST",
              "Activity-based learning & creative projects",
              "Regular assessments & personalized attention",
              "Focus on reading habits & logical thinking"
            ]}
            rating={5}
            quote="My child's interest in studies increased dramatically. The teachers are so caring and creative in their approach."
          />

          {/* Class 9-10 Science & Maths */}
          <Card
            title="Class 9-10 Science & Mathematics"
            copy="Comprehensive preparation for board exams with strong foundation in Science, Maths and core subjects."
            img="/EB2.jpg"
            focus="object-center"
            stats={[
              "Physics, Chemistry, Biology, Mathematics",
              "Practical lab sessions & project work",
              "Weekly tests & board exam pattern practice",
              "Doubt clearing sessions & revision workshops"
            ]}
            rating={5}
            quote="The systematic approach to Science and Maths helped me score 95% in boards. Concepts are crystal clear."
          />

          {/* Class 9-10 SST & English */}
          <Card
            title="Class 9-10 SST & English"
            copy="Master Social Sciences and English with conceptual understanding and excellent writing skills."
            img="/EB5.jpg"
            focus="object-center"
            stats={[
              "History, Geography, Civics, Economics",
              "English grammar & creative writing",
              "Map work & project guidance",
              "Answer writing techniques & time management"
            ]}
            rating={4}
            quote="SST became my favorite subject with their teaching methods. Scoring 92% was beyond my expectations."
          />

          {/* Class 11-12 Science */}
          <Card
            title="Class 11-12 Science (PCM/PCB)"
            copy="Rigorous preparation for board exams and competitive entrance tests with expert faculty."
            img="/EB4.jpg"
            focus="object-center"
            stats={[
              "Physics, Chemistry, Mathematics/Biology",
              "NCERT + advanced concept coverage",
              "Regular tests & performance analysis",
              "Practical lab training & viva preparation"
            ]}
            rating={5}
            quote="The faculty's depth of knowledge and regular tests prepared me perfectly for both boards and NEET."
          />

          {/* Class 11-12 Commerce */}
          <Card
            title="Class 11-12 Commerce"
            copy="Specialized coaching in Commerce subjects with practical accounting and business knowledge."
            img="/EB3.jpg"
            focus="object-center"
            stats={[
              "Accounts, Economics, Business Studies",
              "Mathematics/Entrepreneurship optional",
              "Practical accounting sessions",
              "Case studies & business application"
            ]}
            rating={5}
            quote="Accounts used to scare me, but now I love it! The practical approach made all the difference."
          />

          {/* Class 11-12 Humanities */}
          <Card
            title="Class 11-12 Humanities"
            copy="Comprehensive Humanities program with focus on critical thinking and analytical skills."
            img="/EB1.jpg"
            focus="object-center"
            stats={[
              "History, Political Science, Psychology",
              "Geography, Sociology, Economics",
              "Research projects & field work",
              "Career guidance for diverse fields"
            ]}
            rating={4}
            quote="The interdisciplinary approach opened my mind to so many career options beyond traditional streams."
          />

          {/* English Speaking Course */}
          <Card
            title="English Speaking & Communication"
            copy="Boost confidence in spoken English with focus on fluency, accent neutralization and public speaking."
            img="/E8.jpg"
            focus="object-center"
            stats={[
              "Daily conversation practice",
              "Pronunciation & accent training",
              "Group discussions & presentations",
              "Personality development sessions"
            ]}
            rating={5}
            quote="From hesitant speaker to confident communicator - this course transformed my personality completely."
          />

          {/* AI & Python Programming */}
          <Card
            title="AI & Python Programming"
            copy="Introduction to Artificial Intelligence and Python programming for school students."
            img="/EB2.jpg"
            focus="object-center"
            stats={[
              "Python programming fundamentals",
              "AI/ML basic concepts & applications",
              "Hands-on coding projects",
              "Logical thinking & problem solving"
            ]}
            rating={4}
            quote="Learning Python at school level gave me a huge advantage in college. The projects were really engaging."
          />
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Chanakya Institute?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Expert Faculty</h4>
              <p className="text-sm text-gray-600">Highly qualified teachers with years of teaching experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Personal Attention</h4>
              <p className="text-sm text-gray-600">Small batch sizes ensuring individual focus on every student</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Modern Infrastructure</h4>
              <p className="text-sm text-gray-600">Smart classrooms, labs, and digital learning resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;