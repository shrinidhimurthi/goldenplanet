import React from "react";
import "./VehicleCards.css";

function VehicleCards() {
  const images = [
    { src: "bike1.jpg", tag: "bid", model: "Honda CB500", year: 2020, ownership: "Single Owner", price: "SAR 1400" },
    { src: "car2.jpg", tag: "fixed", model: "Toyota Corolla", year: 2019, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "machine3.jpg", tag: "bid", model: "Excavator ZX200", year: 2021, ownership: "Single Owner", price: "SAR 1400" },
    { src: "bike4.jpg", tag: "fixed", model: "Yamaha R15", year: 2022, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "car1.jpg", tag: "bid", model: "Ferra", year: 2018, ownership: "Single Owner", price: "SAR 1400" },

    { src: "bike2.jpg", tag: "fixed", model: "Suzuki Gixxer", year: 2021, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "plane2.jpg", tag: "bid", model: "Cessna 172", year: 2015, ownership: "Single Owner", price: "SAR 1400" },
    { src: "machine4.jpg", tag: "fixed", model: "Bulldozer D6", year: 2020, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "car3.jpg", tag: "bid", model: "Ford Mustang", year: 2022, ownership: "Single Owner", price: "SAR 1400" },
    { src: "boat1.jpg", tag: "fixed", model: "Bayliner 175", year: 2019, ownership: "Single Owner", price: "SAR 1400/day" },

    { src: "bike3.jpg", tag: "bid", model: "KTM Duke", year: 2021, ownership: "Single Owner", price: "SAR 1400" },
    { src: "boat4.jpg", tag: "fixed", model: "Yamaha SX190", year: 2020, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "plane1.jpg", tag: "bid", model: "Piper PA-28", year: 2016, ownership: "Single Owner", price: "SAR 1400" },
    { src: "car4.jpg", tag: "fixed", model: "BMW 3 Series", year: 2021, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "helicopter1.jpg", tag: "bid", model: "Robinson R44", year: 2018, ownership: "Single Owner", price: "SAR 1400" },

    { src: "machine2.jpg", tag: "fixed", model: "Loader 950K", year: 2020, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "helicopter2.jpg", tag: "bid", model: "Bell 206", year: 2019, ownership: "Single Owner", price: "SAR 1400" },
    { src: "boat3.jpg", tag: "fixed", model: "Sea Ray 210", year: 2021, ownership: "Single Owner", price: "SAR 1400/day" },
    { src: "boat2.jpg", tag: "bid", model: "Bayliner 160", year: 2018, ownership: "Single Owner", price: "SAR 1400" },
    { src: "machine1.jpg", tag: "fixed", model: "Excavator ZX135", year: 2020, ownership: "Single Owner", price: "SAR 1400/day" }
  ];

  return (
    <div className="vehicle-section">
      <div className="image-grid">
        {images.map((img, index) => (
          <div className="img-box" key={index}>
            <img
              src={require(`../../assets/images/${img.src}`)}
              alt="vehicle"
              className="vehicle-img"
            />
            {img.tag && (
              <span className={`img-tag ${img.tag === "bid" ? "bid" : "fixed"}`}>
                {img.tag === "bid" ? "Bid" : "Fixed Price"}
              </span>
            )}
            <div className="img-desc">
              <div className="model">{img.model}</div>
              <div className="details">{img.year} • {img.ownership}</div>
              <div className="price">{img.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-wrapper">
        <button className="load-more-btn">Load More</button>
      </div>
    </div>
  );
}

export default VehicleCards;
