import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
    return <p className="text-muted">No blog posts available.</p>;
  }

  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-3xl font-semibold text-blue-900">Blog</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="card-surface block rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
          >
            {post.image && (
              <div className="w-full h-48 bg-gray-100 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-medium text-blue-800 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              <p className="mt-3 text-base text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
