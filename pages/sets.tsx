import React from "react";

// use the fetch API to get the sets from the Rebrickable API
const getSets = () => {
  return fetch("https://rebrickable.com/api/v3/lego/sets/?key=1b9a2e2b87c0036ef9fcae153cdb6271&page_size=5")
      .then((response) => response.json());
}

export default function Sets() {

  // fetfch the sets from https://rebrickable.com/api/v3/lego/sets/
  const [sets, setSets] = React.useState([]);
  const [years, setYears] = React.useState([]);
  
  // create a function to filter the sets by year
  React.useEffect(() => {
    getSets().then((sets) => {
      setSets(sets);
    });
  }, []);

  const filterByYear = () => {
    setYears([e.target.value]);
  };

  return (
    <div>
      <h1>LEGO Sets</h1>
      <p>Here are some sets from the Rebrickable API</p>
      { /** input to set year state */ }
      
      <ul>
      {sets.length && sets.map((set) => (
        <li key={set.set_num}>
          <h3>{set.name}</h3>
          <p>Set number: {set.set_num}</p>
          <p>Year: {set.year}</p>
          <p>Theme ID: {set.theme_id}</p>
          <p>Number of parts: {set.num_parts}</p>
          <img src={set.set_img_url} alt={set.name} />
          <p>
            <a href={set.set_url}>View set details</a>
          </p>
        </li>
      ))}
    </ul>
    </div>
  );
}