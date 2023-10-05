import React from "react";
import styled from "styled-components";

const FilterOptions = ({ selectedFilter, handleFilterOptionClick }) => {
  const seasons = ["Winter", "Summer", "Friends", "Family","Party","Calm"];
  

  return (
    <FilterContainer>
      {seasons.map((season, index) => (
        <FilterCard
          key={index}
          onClick={() => handleFilterOptionClick(season)}
          selected={selectedFilter === season}
        >
          {season}
        </FilterCard>
      ))}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the options horizontally */
  align-items: center;
`;

const FilterCard = styled.div`
width: ${({ expanded }) => (expanded ? "200px" : "100px")};
height: ${({ expanded }) => (expanded ? "200px" : "100px")};
background-color: ${({ selected }) => (selected ? "#023e8a" : "#48cae4")};
color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 8px;
margin: 0 71px;
font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
transition: all 0.3s ease-in-out;

&:hover {
  background-color: ${({ selected }) => (selected ? "#023e8a" : "#0077b6")};
}
`;


export default FilterOptions;