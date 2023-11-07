import IvanSvg from "../assets/ivan.svg";
import StjepanSvg from "../assets/stjepan.svg";
import MartinSvg from "../assets/martin.svg";

const getAvatarSvg = (picture) => {
  switch (picture) {
    case "img/ivan.jpg":
      return IvanSvg;
    case "img/stjepan.jpg":
      return StjepanSvg;
    case "img/martin.jpg":
      return MartinSvg;
    default:
      return IvanSvg;
  }
};

export default getAvatarSvg;
