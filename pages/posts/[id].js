import { useRouter } from "next/router";
import Layout from "../../components/layaout";
import Title from "../../components/title";

export default function post({ post }) {
  const router = useRouter();
  return (
    <Layout>
      <Title>Post Details</Title>
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 1rem;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  //contenxt.params.id }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
