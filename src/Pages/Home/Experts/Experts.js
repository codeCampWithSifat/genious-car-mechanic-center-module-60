import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Sifat Sayed", img: expert1 },
  { id: 2, name: "Junaed Siddique", img: expert2 },
  { id: 3, name: "Yusuf Pathan", img: expert3 },
  { id: 4, name: "Ikram Pathan", img: expert4 },
  { id: 5, name: "Sejan Mahmud", img: expert5 },
  { id: 6, name: "Don Maruf", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container" id="experts">
      <h2 className="text-primary text-center m-5">See Our Experts</h2>
      <div className="expets_container row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
