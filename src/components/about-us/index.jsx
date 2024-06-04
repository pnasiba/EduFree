import "./style.scss"
import aboutImage from "@images/about-image.png";


 const index = () => {
  return (
    <>
      <div className="about-us__wrapper flex gap-[100px] items-center">
        <div>
          <p className="text-[18px] mb-[16px] text-[#232536]">Tentang Kami</p>
          <h1 className="text-[#232536] text-[38px] font-semibold w-[624px] mb-[16px]">
            EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
          </h1>
          <p className="text-[#7E7F88] w-[622px]">
            Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
            kedepanya dalam bidang pendidikan
          </p>
        </div>
        <div>
          <img src={aboutImage} alt="aboutImage" />
        </div>
      </div>
    </>
  );
}

export default index