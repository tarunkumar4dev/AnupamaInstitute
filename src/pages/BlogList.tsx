import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Calendar, Star, Lightbulb, TrendingUp } from "lucide-react";

export default function BlogList() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Lightbulb className="w-5 h-5" />
            Illuminating Minds Through Knowledge
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
            Deepjyoti 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
              {" "}Insights
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover expert guidance, innovative learning strategies, and academic excellence 
            from Deepjyoti Institute - Where education meets enlightenment.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: "Inspired Learners", value: "2.5K+", color: "from-blue-500 to-cyan-500" },
            { icon: BookOpen, label: "Quality Articles", value: "60+", color: "from-emerald-500 to-green-500" },
            { icon: Award, label: "Expert Mentors", value: "18+", color: "from-amber-500 to-orange-500" },
            { icon: TrendingUp, label: "Success Rate", value: "98%", color: "from-purple-500 to-pink-500" },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
              <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-md`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {BLOG_POSTS.map((p, index) => (
            <Card 
              key={p.slug} 
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-500 hover:shadow-2xl rounded-3xl"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
              
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold px-3 py-1 rounded-full"
                  >
                    {p.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                    <Calendar className="w-3 h-3" />
                    {new Date(p.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
                  <Link 
                    to={`/blog/${p.slug}`} 
                    className="hover:no-underline line-clamp-2"
                  >
                    {p.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <span className="font-medium">By {p.author}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {p.readTime}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3 text-sm">
                  {p.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <Badge 
                      key={t} 
                      variant="outline" 
                      className="text-xs bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 px-2 py-1 rounded-lg"
                    >
                      #{t}
                    </Badge>
                  ))}
                </div>
                
                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group/readmore"
                >
                  Continue Reading
                  <span className="group-hover/readmore:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 rounded-3xl p-10 text-white shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-emerald-300" />
                Join Our Learning Community
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Connected with <span className="text-emerald-300">Deepjyoti Institute</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Receive exclusive educational insights, career guidance, and institute updates 
                that will illuminate your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-3 focus:ring-emerald-400 shadow-lg border-0"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Located at: Daani Bhawan, 852 Agarbatti Wali Gali, Palam Village
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}