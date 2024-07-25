import React, { useState } from 'react';

function QueryParameters() {
  
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  

  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>

      <input id="wd-query-parameter-a"
             className="form-control mb-2"
             value={a}
             type="number"
             onChange={(e) => setA(e.target.value)}
             placeholder="Enter value for a" />

      <input id="wd-query-parameter-b"
             className="form-control mb-2"
             value={b}
             type="number"
             onChange={(e) => setB(e.target.value)}
             placeholder="Enter value for b" />

      <a id="wd-query-parameter-add"
         className="btn btn-primary mb-2"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>

      <a id="wd-query-parameter-subtract"
         className="btn btn-secondary mb-2"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>

      <a id="wd-query-parameter-multiply"
         className="btn btn-info mb-2"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} × {b}
      </a>

      <a id="wd-query-parameter-divide"
         className="btn btn-warning mb-2"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} ÷ {b}
      </a>

      <hr />
    </div>
  );
}

export default QueryParameters;
