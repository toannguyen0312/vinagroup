import React from "react";

import GioiThieu01 from "./GioiThieuImage/GioiThieu01.jpg";
import GioiThieu02 from "./GioiThieuImage/GioiThieu02.jpg";
import GioiThieu03 from "./GioiThieuImage/GioiThieu03.jpg";
import GioiThieu04 from "./GioiThieuImage/GioiThieu04.jpg";
import GioiThieu05 from "./GioiThieuImage/GioiThieu05.jpg";
import GioiThieu06 from "./GioiThieuImage/GioiThieu06.jpg";
import GioiThieu07 from "./GioiThieuImage/GioiThieu07.jpg";
import GioiThieu08 from "./GioiThieuImage/GioiThieu08.jpg";
import GioiThieu09 from "./GioiThieuImage/GioiThieu09.jpg";
import GioiThieu10 from "./GioiThieuImage/GioiThieu10.jpg";
import GioiThieu11 from "./GioiThieuImage/GioiThieu11.jpg";
import GioiThieu12 from "./GioiThieuImage/GioiThieu12.jpg";
import GioiThieu13 from "./GioiThieuImage/GioiThieu13.jpg";
import GioiThieu14 from "./GioiThieuImage/GioiThieu14.jpg";
import GioiThieu15 from "./GioiThieuImage/GioiThieu15.jpg";
import GioiThieu16 from "./GioiThieuImage/GioiThieu16.jpg";
import GioiThieu17 from "./GioiThieuImage/GioiThieu17.jpg";
import GioiThieu18 from "./GioiThieuImage/GioiThieu18.jpg";
import GioiThieu19 from "./GioiThieuImage/GioiThieu19.jpg";
import GioiThieu20 from "./GioiThieuImage/GioiThieu20.jpg";
import GioiThieu21 from "./GioiThieuImage/GioiThieu21.jpg";
import GioiThieu22 from "./GioiThieuImage/GioiThieu22.jpg";
import GioiThieu23 from "./GioiThieuImage/GioiThieu23.jpg";
import GioiThieu24 from "./GioiThieuImage/GioiThieu24.jpg";
import GioiThieu25 from "./GioiThieuImage/GioiThieu25.jpg";

const images = [
  GioiThieu01, GioiThieu02, GioiThieu03, GioiThieu04, GioiThieu05,
  GioiThieu06, GioiThieu07, GioiThieu08, GioiThieu09, GioiThieu10,
  GioiThieu11, GioiThieu12, GioiThieu13, GioiThieu14, GioiThieu15,
  GioiThieu16, GioiThieu17, GioiThieu18, GioiThieu19, GioiThieu20,
  GioiThieu21, GioiThieu22, GioiThieu23, GioiThieu24, GioiThieu25
];

function GioiThieu() {
    return (
    <div className="gioi-thieu-gallery">
      {images.map((img, idx) => (
        <img key={idx} src={img} alt={`GioiThieu${idx + 1}`} style={{maxWidth: "100%", margin: "10px"}} />
      ))}
    </div>
  );
}

export default GioiThieu;