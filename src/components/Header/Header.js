import React from "react";
import "./Header.scss";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import i18 from "common/i18";

export default props => (
    <div>
        <Logo/>
        <SearchBox/>
        <button>{i18.button.create}</button>
    </div>
)