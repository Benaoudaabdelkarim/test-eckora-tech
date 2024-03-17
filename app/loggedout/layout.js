import Navbar from "./components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className="">
      <nav className="fixed top-0 inset-x-0  h-20  bg-white z-10">
        <Navbar />
      </nav>
      <div className="mt-20 pB-6 bg-white">
        {children}
      </div>
    </div>
  );
}
