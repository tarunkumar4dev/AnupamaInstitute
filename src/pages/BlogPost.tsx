import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";

function renderContent(md: string) {
  // minimal markdown-ish renderer (safe plain)
  return md.split("\n").map((line, i) => {
    if (line.startsWith("## ")) 
      return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-[#00296b] border-b border-blue-100 pb-2">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) 
      return <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-[#00509d]">{line.slice(4)}</h3>;
    if (line.startsWith("- ")) 
      return <li key={i} className="ml-6 list-disc text-gray-700 my-1">{line.slice(2)}</li>;
    if (line.startsWith("1. ")) 
      return <li key={i} className="ml-6 list-decimal text-gray-700 my-1">{line.slice(3)}</li>;
    if (line.startsWith("> ")) 
      return <blockquote key={i} className="border-l-4 border-[#ffd500] pl-4 italic text-gray-600 my-4 bg-blue-50 py-2 rounded-r-lg">{line.slice(2)}</blockquote>;
    if (line.trim() === "") 
      return <br key={i} />;
    return <p key={i} className="my-3 text-gray-700 leading-relaxed">{line}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find(p => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00509d] to-[#003888] rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00509d] to-[#003888] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[#00509d] font-semibold hover:text-[#003888] transition-colors duration-200 mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00509d]" />
              <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#00509d]" />
              <span>By {post.author}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00509d]" />
                <span>{post.readTime} read</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <Card className="border border-blue-100 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 sm:p-10">
            <article className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </article>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-blue-100">
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="text-sm text-gray-600">
                  Published by Chanakya Institute of Education
                </div>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-[#00509d] font-semibold hover:text-[#003888] transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#00509d] to-[#003888] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Excel Academically?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Chanakya Institute and experience our proven teaching methodology that has helped hundreds of students achieve academic success.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#ffd500] text-[#00296b] font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}