import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Calendar } from "lucide-react";

export default function BlogList() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Educational Insights
          </div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Anupama Institute Blog
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Expert advice, study strategies, academic updates, and success stories from Anupama Institute of Education.
          </p>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: "Active Readers", value: "200+" },
            { icon: BookOpen, label: "Articles", value: "50+" },
            { icon: Award, label: "Expert Authors", value: "15+" },
            { icon: Calendar, label: "Weekly Updates", value: "New" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white p-4 rounded-xl shadow-sm border border-blue-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-sm text-blue-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((p) => (
            <Card 
              key={p.slug} 
              className="hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-300 bg-white"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0"
                  >
                    {p.category}
                  </Badge>
                  <div className="text-xs text-blue-600 font-medium">
                    {new Date(p.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 leading-tight">
                  <Link 
                    to={`/blog/${p.slug}`} 
                    className="hover:text-blue-600 transition-colors line-clamp-2"
                  >
                    {p.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-xs text-blue-600">
                  <span>By {p.author}</span>
                  <span className="mx-2">•</span>
                  <span>{p.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <Badge 
                      key={t} 
                      variant="outline" 
                      className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm group"
                >
                  Read full article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Anupama Institute</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest educational insights, study tips, and institute updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}