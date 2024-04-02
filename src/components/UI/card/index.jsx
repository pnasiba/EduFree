import "./style.scss";

const index = ({ data: { img, title, description } }) => {
  return (
    <>
      <div className="card__wrapper--items-about p-[48px] bg-[#F4F6FC]">
        <img src={img} alt="image" />
        <p className="text-[24px] font-medium pt-[20px] pb-[12px] w-[327px]">
          {title}
        </p>
        <p className="w-[310px] text-[#666773]">
          {description}
        </p>
      </div>
    </>
  );
};

export default index;
