import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

function CounterComponent() {
  let [count, setCount] = useState(0);
  let increase = () => {
    if (count === 0 || count) {
      setCount(Number(count) + 1);
    }
  };
  let decrease = () => {
    if (count) {
      setCount(count - 1);
    }
  };
  let handleChange = e => {
    setCount(e.target.value);
  };
  return (
    <>
      <Box width={"80px"}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ border: "1px  solid #BDC0C3", borderRadius: "50px" }}
          flexWrap={"nowrap"}>
          <Grid
            item
            sx={{ width: "20px", borderRight: "1px solid #BDC0C3" }}
            container
            alignItems={"center"}
            justifyContent="center"
            overflow="hidden">
            <IconButton
              variant="text"
              size="small"
              type="button"
              sx={{
                color: "#BDC0C3",
                padding: "5px 5px 5px 6px",
              }}
              onClick={decrease}>
              <RemoveIcon sx={{ fontSize: "12px" }} />
            </IconButton>
          </Grid>

          <Grid item sx={{ width: "40px !important" }}>
            <Grid container justifyContent={"center"}>
              <Grid item sx={{ lineHeight: "0px" }}>
                <InputBase
                  type="number"
                  sx={{ input: "-webkit-inner-spin-button" }}
                  inputProps={{
                    style: {
                      width: `${
                        String(count).length > 0 ? String(count).length : +1
                      }ch`,
                      fontSize: "12px",
                      padding: "0px",
                      lineHeight: "0px",
                    },
                  }}
                  value={count}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ width: "20px", borderLeft: "1px solid #BDC0C3" }}
            container
            alignItems={"center"}
            justifyContent="center"
            overflow="hidden">
            <IconButton
              size="small"
              variant="text"
              type="button"
              sx={{
                color: "#BDC0C3",
                padding: "5px 6px 5px 5px",
              }}
              onClick={increase}>
              <AddIcon sx={{ fontSize: "12px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CounterComponent;
