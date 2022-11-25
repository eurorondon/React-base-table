import React, { useRef, useState } from "react";

import BaseTable, { Column, AutoResizer } from "react-base-table";
import "./styles.css";
import "react-base-table/styles.css";
import EditableCell from "./EditableCell";
import DraggableTable from "./trash";

const App = () => {
  const ref = useRef(null);
  const defaultDataset = [
    {
      id: 0,
      name: "ajsj"
    },
    {
      id: 1,
      name: "sfsd"
    },
    {
      id: 2,
      name: "ajwiofjwijsj"
    },
    {
      id: 3,
      name: "3vihuvihe"
    },
    {
      id: 4,
      name: "uhfiuwhuif"
    }
  ];

  const [dataset, setDataset] = useState(defaultDataset);
  const columns = [
    {
      key: "id",
      title: "ID",
      dataKey: "id",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
      frozen: Column.FrozenDirection.LEFT
    },
    {
      key: "name",
      title: "Name",
      dataKey: "name",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
      frozen: Column.FrozenDirection.LEFT
    },
    {
      key: "action",
      dataKey: "action",
      width: 100,
      align: Column.Alignment.CENTER,
      frozen: Column.FrozenDirection.RIGHT,
      cellRenderer: ({ rowData }) => (
        <button
          onClick={() =>
            setDataset((dataset) =>
              dataset.filter((elem) => elem.id !== rowData.id)
            )
          }
        >
          Remove
        </button>
      )
    }
  ];

  const rowProps = ({ rowData, rowIndex }) => {
    return {
      ...{ id: `row-${rowIndex}` }
    };
  };

  return (
    <div className="App">
      <h1>React base table</h1>
      <div style={{ width: "80vw", height: "70vh" }}>
        <AutoResizer>
          {({ width, height }) => (
            <DraggableTable
              columns={columns}
              data={dataset}
              width={width}
              height={height}
            />
          )}
        </AutoResizer>
      </div>
    </div>
  );
};

export default App;
