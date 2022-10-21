import React, { useState } from "react";
import "./Add.css";

function Add() {
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`
https://api.themoviedb.org/3/search/movie?api_key=3f1e00c338baa0e90e37d99fd0e5f0a6&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResults(data);
        } else {
          // setResults([]);
          console.log("sorry Error");
        }
      });
  };

  return (
    <div className="container text-center">
      <div className="janan text-center">
        <input
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search for a movei here"
        />
      </div>

      {/* <div className="results">
        {results.map((data) => (
          <div>{data.results} Hillo janan</div>
        ))}
      </div> */}
      <div>{result}</div>

      {/* <ul> */}
      {/* {results.map((movei) => {
          return <li>{movei}</li>;
        })} */}
      {/* </ul> */}
    </div>
  );
}

export default Add;
