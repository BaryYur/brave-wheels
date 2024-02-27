import { useParams } from "react-router-dom";

export const BikePage = () => {
  const params = useParams();

  // if viewed store dont have this id then add useEffect(add id)

  return (
    <div style={{ paddingTop: "130px" }}>{params.id}</div>
  );
}