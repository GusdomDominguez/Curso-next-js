import { useRouter } from "next/router";
import Layout from "../../components/layaout";
import Title from "../../components/title";

export default function user() {
  const router = useRouter();

  return (
    <Layout>
      <Title>User Details</Title>
      <p>User ID: {router.query.id}</p>
    </Layout>
  );
}
