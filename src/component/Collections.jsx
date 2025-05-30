import { useEffect, useState } from "react";
import { CardComp } from "./card";
import axios from "../service/axios";
import { useNavigate } from "react-router-dom";

export const Seller = () => {
  const navigate = useNavigate()
  const [latestArtwork, setLatestArtwork] = useState([]);

  const getLatestArtwork = async () => {
    const url = `artwork/?newest=latest&newestNo=3`;
    try {
      const response = await axios.get(url);
      if (response) {
        setLatestArtwork(response.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const details = (id) => {
    navigate(`/${id}/art-gallery`);
  };

  useEffect(() => {
    getLatestArtwork();
  }, []);

  return (
    <CardComp
      title="Explore Our Latest Collections"
      titleStyle="text-xl md:text-2xl lg:text-3xl uppercase text-[#09067C] font-[500]"
      items={latestArtwork}
      renderItem={(sale) => (
        <div className="flex items-start justify-start flex-col gap-[4px] w-full h-fit cursor-pointer" onClick={() => details(sale.artworkId)}>
          <div className="w-full h-80">
            <img className="w-full h-full" src={sale.full_artwork_image} />
          </div>
          <div className="py-2 text-base font-[450] text-black uppercase">
            <h6>{sale.artwork_title}</h6>
          </div>
        </div>
      )}
      style="flex items-center justify-start flex-wrap w-full lg:gap-3 gap-5"
      subStyle="w-full md:w-[48.5%] lg:w-[32.3%] flex-0 h-fit overflow-hidden"
    />
  );
};
