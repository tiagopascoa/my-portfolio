import React from "react";
//Styles
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styles";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default Switch;
