import { MenuItem, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core";

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
    Next
  </Button>
);
