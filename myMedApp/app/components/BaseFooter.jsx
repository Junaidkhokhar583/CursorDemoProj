import Divider from "./Divider";

const BaseFooter = () => {
  return (
    <div className="shadow-md ">
    <footer style={{backgroundColor: `#EEF2F5`, color:`#217d94`}}  className="footer text-base-content p-10 ">
      <aside>
        <img
          src="/mainLogo.png"
          alt="mainLogo"
          className="h-auto w-full max-w-[155px] max-h-[96px]" // max-width and max-height
          width="50"
          height="50"
        />
        <p className="ml-[4.2px]">
          Providing reliable Medical Services
          <br />
          Where Your Health is Our Priority
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-[#135d74] text-[1rem] opacity-100">About Us</h6>
        <a href="/Services" className="link link-hover">Services</a>
        <a href="/Contact-Us" className="link link-hover">Contact Us</a>
        <a href="/blog" className="link link-hover">Blog</a>
        <a href="/FAQs" className="link link-hover">FAQs</a>
        <a href="/Contact-Us" className="link link-hover">Enter your Email</a>
      </nav>
      <nav>
        <h6 className="footer-title text-[#135d74] text-[1rem] opacity-100">Terms of Services</h6>
        <a href="" className="link link-hover">Cookie Policy</a>
        <a href="" className="link link-hover">Privacy Policy</a>
        <a href="" className="link link-hover">Subscribe</a>
        <a href="" className="link link-hover">Stay Connected</a>
      
      
      </nav>
      <nav>
        <h6 className="footer-title text-[#135d74] text-[1rem] opacity-100">Legal</h6>
        <a href="" className="link link-hover">Terms of Use</a>
        <a href="" className="link link-hover">Privacy Policy</a>
        <a href="" className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
    <Divider
        className="w-full "
        style={{
          backgroundColor: 'black',
          boxShadow: "0px 4px 12px 5.5px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
};

export default BaseFooter;
