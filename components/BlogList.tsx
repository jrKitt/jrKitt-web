import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiDocumentText } from 'react-icons/hi';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/blog.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to load blog posts', err));
  }, []);

  if (!posts.length) {
    return <p className="text-slate-500">No blog posts available.</p>;
  }

  return (
    <section className="space-y-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
        <HiDocumentText className="text-sky-400" size={20} /> Blog
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 transition hover:border-slate-700 hover:bg-slate-900/50"
          >
            {post.image && (
              <div className="aspect-video overflow-hidden bg-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="line-clamp-2 font-semibold text-slate-200 transition group-hover:text-sky-400">{post.title}</h3>
              <p className="mt-2 font-mono text-xs text-slate-500">{post.date}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
