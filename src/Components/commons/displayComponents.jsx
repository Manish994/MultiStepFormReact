import { MenuItem, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export const renderText = ({ label, color, align, variant }) => {
  return (
    <Typography
      color={color ? color : "primary"}
      align={align ? color : "center"}
      variant={variant ? variant : "h6"}
    >
      {label}
    </Typography>
  );
};

export const renderInputBox = ({
  label,
  name,
  color,
  state,

  handleInputChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleInputChange}
    ></TextField>
  );
};

export const renderSelectBox = ({
  label,
  name,
  color,
  state,
  options,
  handleInputChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      select
      label={label}
      color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleInputChange}
    >
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({
  label,
  variant,
  color,
  handleOnButttonClick,
}) => (
  <Button
    variant={variant ? variant : "outlined"}
    color={color ? color : "primary"}
    size="small"
    onClick={handleOnButttonClick}
  >
    {" "}
    {label}
  </Button>
);
