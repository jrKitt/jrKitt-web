"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog.json')
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const found = data.find((p) => p.id === params.id);
        if (found) {
          setPost(found);
        }
      })
      .catch((err) => console.error('Failed to load blog posts', err))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Post not found</h1>
        <Link href="/" className="mt-4 text-blue-600 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block font-medium">
        &larr; Back to Home
      </Link>
      
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500">{post.date}</p>
      </header>

      {post.image && (
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-100 shadow-md">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        {post.content.split('\n').map((paragraph, idx) => {
          // Simple bold formatting for lines starting with **
          if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
            const parts = paragraph.split('**');
            return (
              <p key={idx} className="mb-6">
                <strong>{parts[1]}</strong>{parts[2]}
              </p>
            );
          }
          return paragraph ? <p key={idx} className="mb-6">{paragraph}</p> : <br key={idx} />;
        })}
      </div>
    </article>
  );
}
