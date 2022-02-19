import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const useStyles = makeStyles({
  element: {
    border: "1px  solid #BDC0C3",
    borderRadius: "8px",
    height: "40px",
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
function VerticalCounterComponent() {
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
      <Box width={"80px"}>
        <Grid
          container
          justifyContent={"space-between"}
          className={classes.element}
          flexWrap={"nowrap"}
          flexDirection={"row"}
        >
          <Grid
            item
            sm={8}
            container
            justifyContent={"center"}
            alignItems="center"
          >
            <Grid item sx={{ verticalAlign: "middle" }}>
              <InputBase
                type="number"
                sx={{
                  input: "-webkit-inner-spin-button",
                }}
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
          <Grid
            item
            sm={4}
            sx={{
              borderLeft: "1px solid #BDC0C3",
            }}
          >
            <Grid
              container
              flexDirection={"column"}
              alignItems="center"
              justifyContent={"center"}
              flexWrap="nowrap"
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent={"center"}
                sx={{
                  borderBottom: "1px solid #BDC0C3",
                }}
              >
                <IconButton
                  size="small"
                  variant="text"
                  type="button"
                  sx={{
                    color: "#BDC0C3",
                    padding: "0px",
                  }}
                  onClick={inccount}
                >
                  <AddIcon sx={{ fontSize: "18px" }} />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                justifyContent={"center"}
              >
                <IconButton
                  variant="text"
                  size="small"
                  type="button"
                  sx={{
                    color: "#BDC0C3",
                    padding: "0px",
                  }}
                  onClick={deccount}
                >
                  <RemoveIcon sx={{ fontSize: "18px" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default VerticalCounterComponent;
