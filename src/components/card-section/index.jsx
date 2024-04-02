import "./style.scss";
import { Card } from "@ui";

import cardImage from "@images/cardImage1.svg";
import cardImage2 from "@images/cardImage2.svg";
import cardImage3 from "@images/cardImage3.svg";
import cardImage4 from "@images/cardImage4.svg";
import cardImage5 from "@images/cardImage5.svg";
import cardImage6 from "@images/cardImage6.svg";

const index = () => {

     const card_data = [
       {
         img: cardImage,
         title: "Kursus Gratis",
         description:
           "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
       },
       {
         img: cardImage2,
         title: "Akses Selamanya",
         description:
           "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
       },
       {
         img: cardImage3,
         title: "Grup Konsultasi",
         description:
           "Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru ",
       },
       {
         img: cardImage4,
         title: "Sertifikat dan Portofolio",
         description:
           "Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan",
       },
       {
         img: cardImage5,
         title: "Belajar Lebih Terarah",
         description:
           "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan",
       },
       {
         img: cardImage6,
         title: "Instruktur Berpengalaman",
         description:
           "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya",
       },
     ];

  return (
    <>
      <div className="card__wrapper">
        <h1 className="text-[38px] font-semibold text-[#282938] w-[641px] mx-auto text-center mb-[62px]">
          Keuntungan Bergabung Dengan E-Learning EDUFREE
        </h1>

        <div className="card__wrapper--items grid grid-cols-3 gap-[42px]">
          {card_data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default index;
