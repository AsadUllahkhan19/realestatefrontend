import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import { useState } from "react";
const PriceAreaRangeField = ({
  typePrice,
  minPrice,
  maxPrice,
  minPriceFn,
  maxPriceFn,
  setValueFn,
}) => {
  const [open, setOpen] = useState(false);

  const minPriceArray = ["None", 100, 2000, 300000, 400000, 500000, 1000000];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setValueFn(
        `${minPrice != "None" ? minPrice : ""}${
          minPrice != "None" || maxPrice != "None" ? "|" : ""
        }${maxPrice != "None" ? maxPrice : ""}`
      );
      setOpen(false);
    }
  };
  return (
    <div>
      <TextField
        label={typePrice ? "Select Price Range" : "Select Area Range"}
        onClick={handleClickOpen}
        size="small"
        value={`${typePrice ? "AED" : "SqFt"} ${
          minPrice && minPrice != "None" ? minPrice : "min"
        } - ${maxPrice && maxPrice != "None" ? maxPrice : "max"}`}
      />
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select your Range</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Min</InputLabel>
              <Select
                value={minPrice}
                onChange={(e) => minPriceFn(e.target.value)}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                {minPriceArray?.map((opt, i) => (
                  <MenuItem
                    key={i}
                    selected={opt == minPrice ? true : false}
                    value={opt}
                    name={opt}
                  >
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Max</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={maxPrice}
                onChange={(e) => maxPriceFn(e.target.value)}
                input={<OutlinedInput label="Age" />}
              >
                {minPriceArray?.map((opt, i) => (
                  <MenuItem
                    key={i}
                    selected={opt == maxPrice ? true : false}
                    value={opt}
                    name={opt}
                  >
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PriceAreaRangeField;
