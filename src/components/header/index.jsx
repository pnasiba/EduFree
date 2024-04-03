import "./style.scss";
import { Container } from "@containers";
import logo from "@images/logo.svg";

const index = () => {
  return (
    <>
      <header className="bg-[#1C1E53] text-white fixed w-full z-[99999]">
        <Container>
          <nav className="flex justify-between h-[90px] items-center">
            <a href="./index.jsx">
              <img src={logo} alt="logo" />
            </a>

            <div className="flex items-center gap-[72px]">
              <ul className="flex gap-[35px]">
                <li className=" duration-200 cursor-pointer">
                  <a href="#" className="hover:text-[#FCD980]">
                    HOME
                  </a>
                </li>
                <li className="hover:text-[#FCD980] duration-200 cursor-pointer">
                  <a href="#">TENTANG KAMI</a>
                </li>
                <li className="hover:text-[#FCD980] duration-200 cursor-pointer">
                  <a href="#">KURSUS</a>
                </li>
                <li className="hover:text-[#FCD980] duration-200 cursor-pointer">
                  <a href="#">FAQ</a>
                </li>
                <li className="hover:text-[#FCD980] duration-200 cursor-pointer flex items-center gap-[6px]">
                  <a href="#">BLOG</a>
                  <i className="bi bi-box-arrow-up-right"></i>
                </li>
              </ul>

              <button className="bg-transparent text-white border py-[13px] px-[41px] rounded-[5px] hover:bg-white hover:text-blue-700 duration-200 outline-none">Login</button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default index;
