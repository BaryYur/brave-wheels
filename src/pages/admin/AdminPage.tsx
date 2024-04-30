import React, { useState } from "react";

import { useGetImage } from "../../hooks";

import { Container } from "../../components";
import { Input, Button, H4 } from "../../theme";

import { RadioGroup, FormControlLabel, Radio, Checkbox } from "@mui/material";

import axios from "axios";

const materials = [
  {
    name: "ALUMINIUM",
  },
  {
    name: "CARBON",
  },
  {
    name: "TITANIUM",
  },
];

const bikeTypes = [
  {
    name: "MOUNTAIN",
  },
  {
    name: "HIGHWAY",
  },
  {
    name: "CITY",
  },
  {
    name: "ELECTRO",
  },
];

const wheelSizes = [
  {
    name: "26",
  },
  {
    name: "28",
  },
  {
    name: "29",
  },
];

export const AdminPage = () => {
  const { image, changeImage } = useGetImage();
  const [formData, setFormData] = useState({
    bicycleType: "MOUNTAIN",
    brakeType: "",
    brand: "",
    color: "",
    description: "",
    frameType: "OPEN",
    guarantee: 0,
    materialType: "ALUMINIUM",
    name: "",
    price: 0,
    quantity: 0,
    sale: false,
    weight: 0,
    wheelSize: 0,
  });
  const [loading, setLoading] = useState(false);

  const bicycleTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      bicycleType: (event.target as HTMLInputElement).value,
    });
  }

  const materialTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      materialType: (event.target as HTMLInputElement).value,
    });
  }

  const wheelSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      wheelSize: Number((event.target as HTMLInputElement).value),
    });
  }

  const frameTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      frameType: (event.target as HTMLInputElement).value,
    });
  }

  const addBikeHandler = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    try {
      const body = {
        ...formData,
        images: [ image.toString().split(",")[1] ]
      }

      await axios.post(`https://bicycleapi.onrender.com/api/bicycle/save`, body);

      setFormData({
        bicycleType: "MOUNTAIN",
        brakeType: "",
        brand: "",
        color: "",
        description: "",
        frameType: "OPEN",
        guarantee: 0,
        materialType: "ALUMINIUM",
        name: "",
        price: 0,
        quantity: 0,
        sale: false,
        weight: 0,
        wheelSize: 0,
      });

      // const fileInput = document.getElementById("bike-image");
      //
      // if (fileInput) {
      //   fileInput.value = "";
      // }
      // alert("Successfully added");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ paddingTop: "180px", paddingBottom: "100px", fontFamily: "sans-serif" }}>
      <Container>
        <H4 style={{ marginBottom: "20px" }}>Adding bike</H4>
        <form onSubmit={addBikeHandler}>
          <div style={{display: "flex", gap: "20px", paddingBottom: "10px", flexWrap: "wrap", alignItems: "flex-end", width: "500px" }}>
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(event) => setFormData({
                ...formData,
                name: event.target.value,
              })}
            />
            <Input
              placeholder="Color (hex color only)"
              name="Color"
              value={formData.color}
              onChange={(event) => setFormData({
                ...formData,
                color: event.target.value,
              })}
            />
            <Input
              placeholder="Brake type"
              name="brakeType"
              value={formData.brakeType}
              onChange={(event) => setFormData({
                ...formData,
                brakeType: event.target.value,
              })}
            />
            <Input
              placeholder="Brand name"
              name="brand"
              value={formData.brand}
              onChange={(event) => setFormData({
                ...formData,
                brand: event.target.value,
              })}
            />
            <div style={{display: "flex", flexDirection: "column"}}>
              <label style={{marginBottom: "5px"}}>Price</label>
              <Input
                type="number"
                placeholder="Price"
                name="price"
                value={formData.price}
                min={0}
                onChange={(event) => setFormData({
                  ...formData,
                  price: Number(event.target.value),
                })}
              />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <label style={{marginBottom: "5px"}}>Quantity</label>
              <Input
                type="number"
                placeholder="Quantity"
                name="quantity"
                min={1}
                value={formData.quantity}
                onChange={(event) => setFormData({
                  ...formData,
                  quantity: Number(event.target.value),
                })}
              />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <label style={{marginBottom: "5px"}}>Weight</label>
              <Input
                type="number"
                placeholder="Weight"
                name="weight"
                min={1}
                value={formData.weight}
                onChange={(event) => setFormData({
                  ...formData,
                  weight: Number(event.target.value),
                })}
              />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <label style={{marginBottom: "5px"}}>Guarantee</label>
              <Input
                type="number"
                placeholder="Guarantee"
                name="quantity"
                min={1}
                value={formData.guarantee}
                onChange={(event) => setFormData({
                  ...formData,
                  guarantee: Number(event.target.value),
                })}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{marginBottom: "5px"}}>Image</label>
              <Input
                id="bike-image"
                name="image"
                type="file"
                accept="image/png, image/svg+xml, image/jpeg, image/jpg"
                onChange={changeImage}
                style={{ padding: "7px 10px" }}
              />
            </div>
          </div>
          <div style={{display: "flex", gap: "20px"}}>
            <RadioGroup
              defaultValue="MOUNTAIN"
              name="radio-buttons-group"
              onChange={bicycleTypeHandler}
            >
              {bikeTypes.map(item => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  name="bikeType"
                  control={
                    <Radio sx={{
                      color: "#ff6f1e",
                      '&.Mui-checked': {
                        color: "#ff6f1e",
                      },
                    }}
                    />
                  }
                  label={item.name}
                />
              ))}
            </RadioGroup>
            <RadioGroup
              defaultValue="ALUMINIUM"
              name="radio-buttons-group"
              onChange={materialTypeHandler}
            >
              {materials.map(item => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  name="materialType"
                  control={
                    <Radio sx={{
                      color: "#ff6f1e",
                      '&.Mui-checked': {
                        color: "#ff6f1e",
                      },
                    }}
                    />
                  }
                  label={item.name}
                />
              ))}
            </RadioGroup>
            <RadioGroup
              defaultValue="26"
              name="radio-buttons-group"
              onChange={wheelSizeHandler}
            >
              {wheelSizes.map(item => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  name="wheelSize"
                  control={
                    <Radio sx={{
                      color: "#ff6f1e",
                      '&.Mui-checked': {
                        color: "#ff6f1e",
                      },
                    }}
                    />
                  }
                  label={item.name}
                />
              ))}
            </RadioGroup>
            <RadioGroup
              defaultValue="OPEN"
              name="radio-buttons-group"
              onChange={frameTypeHandler}
            >
              <FormControlLabel
                value="OPEN"
                label="Open"
                name="frameType"
                control={
                  <Radio sx={{
                    color: "#ff6f1e",
                    '&.Mui-checked': {
                      color: "#ff6f1e",
                    },
                  }}
                  />}
                />
              <FormControlLabel
                name=""
                value="CLOSED"
                label="Closed"
                control={
                  <Radio sx={{
                    color: "#ff6f1e",
                    '&.Mui-checked': {
                      color: "#ff6f1e",
                    },
                  }}
                  />
                }
              />
            </RadioGroup>
          </div>
          <FormControlLabel control={<Checkbox name="sale" />} label="Sale" />

          <div>
            <textarea
              placeholder="Description"
              onChange={(event) => {
                setFormData({
                  ...formData,
                  description: event.target.value,
                });
              }}
              style={{padding: "12px", borderRadius: "10px", border: "1px solid lightgrey", minWidth: "350px", minHeight: "150px" }}
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={loading}
            style={{padding: "10px", width: "120px", marginTop: "20px"}}
          >
            {loading ? <span>Loading...</span> : <span>Add</span>}
          </Button>
        </form>
      </Container>
    </div>
  );
}