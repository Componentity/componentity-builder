import Link from 'next/link'
import { useRouter } from 'next/router'
import ImageComponentity from '../../components/ImageComponentity'
// import ReactMarkdown from 'react-markdown'



export default function Post({post}) {
    console.log("POSTS" , post)
  const router = useRouter()

  let i = 0;
  if (router.isFallback) {
    return <div>Loading...</div>
  }


  



  return (
    <>
    
<div className="relative">  
  
  <div className="bg-indigo-100 p-10 relative">
    <div className="max-w-screen-sm mx-auto">
      <div className=" p-10 ">
      <ImageComponentity
                    alt={post[0].image.formats.small.name}
                    src={post[0].image.formats.small.url}
                  />
      </div>
    </div>
    
  </div>
  
  <div className="max-w-2xl mx-auto">
    <div className="mt-3 bg-black text-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="shadow-md p-8">
                    {
                        post[0].code ? post[0].code : 'Code not added yet!'
                    }
              </div>
          
            </div>
       </div>
  </div>
    </>
  );
}


export async function getStaticPaths() {
  const res = await fetch(`https://peaceful-ridge-63546.herokuapp.com/sections`);
  const posts = await res.json();

  const slugs = [];
  posts.forEach((post) => {
    slugs.push({ params: { slug: post.slug } });
  });

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { slug } = params;

  const res = await fetch(`https://peaceful-ridge-63546.herokuapp.com/sections?slug=${slug}`);
//   const cats = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/categories`);

  // const categories = await cats.json();
  const post = await res.json();
  // let id;
  // post[0].categories.map((c) => {
  //   return (id = c.id);
  // });
  

  // const post_cats = await fetch(`${process.env.NEXTJS_PUBLIC_URL}/posts?categories=${id}&_sort=created_at:DESC&_limit=4`);
  // const post_cat = await post_cats.json();

  return {
    props: { 
      post
      // , categories, post_cat 
    },
    // Re-generate the post at most once per second
    // if a request comes in
    // revalidate: 1,
  };
}
