import { Link } from "react-router-dom";

const Footer = () => {
     return (
          <footer className="footer p-10 bg-[#1f2937] text-white">
  <aside>
  <Link to={'/'}>
  <h2
            className=' lg:text-4xl md:text-3xl text-2xl uppercase 
               text-[#5c85ef]
              font-bold'
          >
            Our-Task
          </h2>
  </Link>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Resources</a>
    <a className="link link-hover">For Team</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
     );
};

export default Footer;