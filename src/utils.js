import React from "react";
import ReactDOM from "react-dom";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";
import * as ReactSortableHoc from "react-sortable-hoc";
import * as ReactOverlays from "react-overlays";
import ReactTexty from "react-texty";
import faker from "faker";

import BaseTable, {
  Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow
} from "react-base-table";

export const generateColumns = (count = 10, prefix = "column-", props) =>
  new Array(count).fill(0).map((column, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 100
  }));

const noop = () => {};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const action = (message) => (args) => console.log(message, args);

const Table = React.forwardRef((props, ref) => (
  <BaseTable ref={ref} width={700} height={400} {...props} />
));
Table.Column = Column;
Table.PlaceholderKey = BaseTable.PlaceholderKey;

export default {
  React,
  ReactDOM,

  styled,
  css,
  keyframes,
  createGlobalStyle,

  ReactSortableHoc,
  ReactOverlays,
  ReactTexty,
  faker,

  BaseTable,
  Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  BaseTableRow,
  BaseTableHeader,

  generateColumns,
  noop,
  delay,
  action,
  Table
};
