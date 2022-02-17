import { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const useStyles = makeStyles({
  element: {
    border: "1px  solid #BDC0C3",
    borderRadius: "50px",
  },
  countfield: {
    borderBlockColor: "black",
  },
  textfield: {
    color: "#BDC0C3",
  },
  btn: {
    backgroundColor: "black",
  },
});
function CounterComponent() {
  let [count, setcount] = useState(0);
  let inccount = () => {
    if (count === 0 || count) {
      setcount(Number(count) + 1);
    }
  };
  let deccount = () => {
    if (count) {
      setcount(count - 1);
    }
  };
  let handleChange = (e) => {
    setcount(e.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <Box width={"150px"}>
        <Grid
          container
          justifyContent={"space-between"}
          className={classes.element}
          flexWrap={"nowrap"}
        >
          <Grid item sx={{ width: "35px", borderRight: "1px solid #BDC0C3" }}>
            <IconButton
              variant="text"
              size="small"
              type="button"
              sx={{
                color: "#BDC0C3",
              }}
              onClick={deccount}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>

          <Grid item sx={{ width: "80px !important" }}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <InputBase
                  type="number"
                  sx={{ input: "-webkit-inner-spin-button" }}
                  inputProps={{
                    style: {
                      width: `${
                        String(count).length > 0 ? String(count).length : +1
                      }ch`,
                    },
                  }}
                  value={count}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "40px", borderLeft: "1px solid #BDC0C3" }}>
            <IconButton
              size="small"
              variant="text"
              type="button"
              sx={{
                color: "#BDC0C3",
              }}
              onClick={inccount}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CounterComponent;
