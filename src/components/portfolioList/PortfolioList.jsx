import React from 'react';
import "./portfolioList.scss";

export default function PortfolioList({ setSelected, active, title, id }) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => { setSelected(id) }}>
            {title}
        </li>
    )
}
