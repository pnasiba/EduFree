import introImage from "@images/intro-bg.png";

const index = () => {
  return (
    <>
      <div className="intro__wrapper flex items-start gap-[120px]">
        <div>
          <h1 className="mb-[32px] w-[595px] text-[42px] text-white font-semibold leading-[160%]">
            Bangun dan Wujudkan Cita Bersama EDUFREE
          </h1>
          <p className="w-[597px] text-white mb-[62px]">
            EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
            online yang bertujuan untuk membantu kamu meraih cita di bidang
            teknologi.
          </p>
          <div className="flex gap-[35px] items-center">
            <button className="py-[15px] px-[43px] bg-[#FCD980] hover:bg-[#fbca4e] duration-200 text-[#282938] rounded-[5px] font-medium">
              Lihat Kursus
            </button>
            <span className="text-white flex gap-[8px] cursor-pointer">
              <a href="#">Lihat Alur Belajar</a>
              <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
        <div>
          <img src={introImage} alt="intro-bg" />
        </div>
      </div>
    </>
  );
};

export default index;
