import { CircularProgress } from "@mui/material";
import { theme } from "../../theme";

export const Loader = () => {
  return (
    <CircularProgress
      sx={{
        color: theme.light.palette.orange,
      }}
    />
  );
};
