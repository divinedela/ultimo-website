import BlogDetails from './BlogDetails';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  // Replace this with actual data fetching or mock data
  const blogs = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

interface BlogPageProps {
  params: { id: string };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { id } = params;

  return (
    <>
      <BlogDetails id={id} />
    </>
  );
};

export default BlogPage;
