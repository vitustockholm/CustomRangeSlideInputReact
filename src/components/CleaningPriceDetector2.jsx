import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  label {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #666;
  }

  input[type='range'] {
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    background-color: #ddd;
    border-radius: 5px;
    outline: none;
    margin-bottom: 10px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #4caf50;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .slider-values {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: #999;
  }
`;

const PropertyTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 10px;
    color: #666;
  }
`;

// const RadioContainer = styled.label`
//   display: flex;
//   align-items: center;
//   margin-right: 20px;

//   input[type="radio"] {
//     margin-right: 5px;
//     cursor: pointer;
//   }
// `;

const Slider = styled.input`
  appearance: none;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: -5px;
  }
`;

const SliderValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: #999;
  width: 100%;

  span:first-of-type {
    width: 50%;
    text-align: left;
  }

  span:last-of-type {
    width: 50%;
    text-align: right;
  }
`;

const Price = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #ff8a00, #e52e71);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PriceDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
const CleaningPriceDetector2 = () => {
  const [squareMeters, setSquareMeters] = useState(50);
  const [propertyType, setPropertyType] = useState('house');
  const [propertyRooms, setPropertyRooms] = useState('1');

  const handleSquareMetersChange = (event) => {
    setSquareMeters(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleSquareRoomsChange = (event) => {
    setPropertyRooms(event.target.value);
  };

  const calculatePrice = () => {
    let basePrice = 0;

    if (propertyType === 'office') {
      basePrice = 30;
    } else if (propertyType === 'house') {
      basePrice = 50;
    } else if (propertyType === 'boat') {
      basePrice = 100;
    }

    let total = basePrice * squareMeters + propertyRooms / 0.15 / 15;
    return total.toFixed(2);
  };

  return (
    <Container>
      <Heading>Paslaugos kaina</Heading>
      <SliderContainer>
        <label htmlFor="square-meters-slider">M2 metrų:</label>
        <Slider
          type="range"
          id="square-meters-slider"
          min="50"
          max="500"
          step="50"
          value={squareMeters}
          onChange={handleSquareMetersChange}
        />
        <SliderValues>
          <span>50 m²</span>
          <h3>{squareMeters}m2</h3>
          <span>500 m²</span>
        </SliderValues>
      </SliderContainer>
      <SliderContainer>
        <label htmlFor="square-rooms-slider">Kambarių skaičius:</label>
        <Slider
          type="range"
          id="property-rooms-slider"
          min="1"
          max="25"
          step="1"
          value={propertyRooms}
          onChange={handleSquareRoomsChange}
        ></Slider>
        <SliderValues>
          <span>1 kambarys</span>
          <h3>{propertyRooms}</h3>
          <span>25 kambariai</span>
        </SliderValues>
      </SliderContainer>
      <PropertyTypeContainer>
        <label htmlFor="property-type">Tipas:</label>

        <input
          type="radio"
          id="office-radio"
          name="property-type"
          value="office"
          checked={propertyType === 'office'}
          onChange={handlePropertyTypeChange}
        />
        <label htmlFor="office-radio">Ofisas</label>

        <input
          type="radio"
          id="house-radio"
          name="property-type"
          value="house"
          checked={propertyType === 'house'}
          onChange={handlePropertyTypeChange}
        />
        <label htmlFor="house-radio">Namas</label>

        <input
          type="radio"
          id="boat-radio"
          name="property-type"
          value="boat"
          checked={propertyType === 'boat'}
          onChange={handlePropertyTypeChange}
        />
        <label htmlFor="boat-radio">Laivas</label>
      </PropertyTypeContainer>
      <PriceDisplay>
        <Price>Kaina: €{calculatePrice()}</Price>
      </PriceDisplay>
    </Container>
  );
};

export default CleaningPriceDetector2;
