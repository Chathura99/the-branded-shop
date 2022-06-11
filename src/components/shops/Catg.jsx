import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Mochi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Metro",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Adidas.",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Converse.",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Bata",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Adidas",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
