import { useState } from "react";

export const useGetImage = () => {
  const [image, setImage] = useState<string | ArrayBuffer>("");

  const changeImage = (e: any) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    if ((file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") && file.size < 1_000_000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result);
        }
      }
    } else if (file.size > 1_000_000) {
      setImage("");
      e.target.value = "";
      alert("Image is to heavy");
    } else {
      setImage("");
      e.target.value = "";
    }
  }

  return {
    changeImage,
    image,
  }
}