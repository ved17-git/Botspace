import React, { useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "@/app/store/currentState";
import { RootState } from "@/app/store/Store";


function TabToggle() {
  const currentState = useSelector((state: RootState) => state.current.current);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>(currentState);

  useEffect(() => {
    setValue(currentState);
  }, [currentState]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setValue(newValue);
      dispatch(updateState(newValue));
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="tab switcher"
      sx={{
        backgroundColor: "#f0f1f5",
        borderRadius: "999px",
        padding: "0",
        display: "flex",
        boxShadow: "",
      }}
    >
      {["post", "comments", "dm"].map((option) => (
        <ToggleButton
          key={option}
          value={option}
          aria-label={option}
          sx={{
            textTransform: "capitalize",
            borderRadius: "999px",
            px: 2,
            py: 0.5,
            fontWeight: "bold",
            color: value === option ? "#000" : "#888",
            backgroundColor: value === option ? "#fff" : "transparent",
            "&.Mui-selected": {
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            },
            "&:not(.Mui-selected)": {
              backgroundColor: "transparent",
            },
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default TabToggle;
