import Layout from "../components/layaout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title>Home page</Title>
      <p>Aprendiendo nextjs</p>
      <style>
        {`
         p {
           color: darkgray;
         }
         p:hover {
           color: darkred;
         }
        `}
      </style>
    </Layout>
  );
}
