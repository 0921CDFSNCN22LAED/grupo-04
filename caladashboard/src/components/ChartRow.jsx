import React from 'react';

const ChartRow = (props) => {
  console.log(props)
  return (
    <tr>
      {/* <td>{props.Title}</td>
      <td>{props.data.categories.name}</td>
      <td>{props.data.rating}</td> */}
      <td>
        <ul>
          {props.data.data.map((product, i) => (
            <li key={`category ${i}`}>{i.name}</li>
          ))}
        </ul>
      </td>
      <td>{props.Awards}</td>
    </tr>
  );
};

export default ChartRow;
