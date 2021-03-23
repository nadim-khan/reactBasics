import React from "react";

function TableColumn(props) {
  return (
    <React.Fragment>
      <th>Name
      </th>
      <th>Nadeem
      </th>
    </React.Fragment>
  );
}

function Fragment() {
  return (
    <React.Fragment>
      <h3>Fragment</h3>
      <table>
          <thead>
                  <TableColumn/>
          </thead>
      </table>
    </React.Fragment>
  );
}

export default Fragment;
