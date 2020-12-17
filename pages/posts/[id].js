import { useRouter } from "next/router";
import Layout from "../../components/layaout";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function post() {
  const router = useRouter();
  return (
    <Layout>
      <Title>Post Details</Title>
      <p>Post ID: {router.query.id}</p>
    </Layout>
  );
}
