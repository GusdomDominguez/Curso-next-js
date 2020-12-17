import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        doloremque quibusdam rem omnis iusto, fuga expedita nulla cum
        reprehenderit quasi maxime libero quam repellendus, error deserunt sit
        numquam illum reiciendis?
      </p>
    </div>
  );
}
