/** @format */

import { createPost } from '@/actions/posts';
import PostForm from '@/components/PostForm';

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
