import { Typography } from "@material-ui/core";

export const renderText = ({ label, color, align, varient }) => {
  return (
    <Typography
      color={color ? color : "primary"}
      align={align ? color : "center"}
      varient={varient ? varient : "h6"}
    >
      {label}
    </Typography>
  );
};
