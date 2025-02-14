```javascript
// bugSolution.js
import { Suspense } from 'react';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data here
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

```