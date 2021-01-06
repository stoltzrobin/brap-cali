import styled from "@emotion/styled";
import React from "react";

const parameters = [
  { id: 1, name: "temp 1", value: 10 },
  { id: 2, name: "temp 2", value: 20 },
  { id: 3, name: "temp 3", value: 30 },
  { id: 4, name: "temp 4", value: 40 },
  { id: 5, name: "temp 5", value: 50 },
  { id: 6, name: "temp 6", value: 60 },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TableContent = styled.div`
  width: 50%;
  display: flex;
`;

const TableColumn = styled.div`
  flex: 1;
  text-align: left;
`;
const TableInput = styled.input`
  flex: 1;
  text-align: left;
`;
const Separator = styled.hr`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Table = () => (
  <Wrapper>
    {parameters.map((param, i) => (
      <React.Fragment key={i}>
        <TableContent>
          <TableColumn>{param.id}</TableColumn>
          <TableColumn>{param.name}</TableColumn>
          <TableInput value={param.value} />
        </TableContent>
        <Separator />
      </React.Fragment>
    ))}
  </Wrapper>
);
