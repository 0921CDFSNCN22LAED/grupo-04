import React from 'react';

const Chart = (props) => {
  console.log(props.data);
  return (
    /* <!-- DataTales Example --> */
    <>
      {props.data && (
        <>
          <div className='card shadow mb-4'>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
                  <thead>
                    <tr>
                      <th>Título</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          {props.data.slice(0, 10).map((product, i) => (
                            <li key={`product ${i}`}>{product.name}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chart;
