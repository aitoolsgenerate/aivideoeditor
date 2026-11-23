import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send, User, X } from 'lucide-react';
import { BlogPost } from '../types/theme';
import { ResilientImage } from './ResilientImage';

interface PostReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  accentColor: string;
}

interface CommentItem {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export const PostReaderModal: React.FC<PostReaderModalProps> = ({
  post,
  onClose,
  accentColor,
}) => {
  const [comments, setComments] = useState<Record<string, CommentItem[]>>({});
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');

  if (!post) return null;

  const postComments = comments[post.id] || [
    {
      id: 'initial-1',
      author: 'Jordan Patel',
      text: 'Clean layout breakdown—having the XML widgets separated makes maintaining Blogger landing sections much easier.',
      timestamp: '2 days ago',
    },
  ];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !commentInput.trim()) return;

    const newComment: CommentItem = {
      id: `${Date.now()}`,
      author: nameInput.trim(),
      text: commentInput.trim(),
      timestamp: 'Just now',
    };

    setComments((prev) => ({
      ...prev,
      [post.id]: [...postComments, newComment],
    }));
    setNameInput('');
    setCommentInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {post.category} · {post.readTime}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight uppercase">
              {post.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden aspect-16/9 bg-slate-100">
            <ResilientImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Blogger Comments Preview */}
          <div className="pt-6 border-t border-slate-200 space-y-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <MessageSquare className="w-4 h-4" />
              Comments ({postComments.length})
            </div>

            <div className="space-y-3">
              {postComments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-900">
                      {comment.author}
                    </span>
                    <span className="text-slate-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-slate-600">{comment.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmitComment} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  required
                  placeholder="Write a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: accentColor }}
              >
                <Send className="w-3.5 h-3.5" />
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
