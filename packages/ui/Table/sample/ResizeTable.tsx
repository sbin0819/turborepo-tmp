import React from 'react';

import {
  useReactTable,
  ColumnResizeMode,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
    ],
  },
  {
    header: 'Info',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: (props) => props.column.id,
      },
      {
        header: 'More Info',
        columns: [
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];

function ResizeTable() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [columns] = React.useState<typeof defaultColumns>(() => [
    ...defaultColumns,
  ]);

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    debugTable: process.env.node_env !== 'production',
    debugHeaders: process.env.node_env !== 'production',
    debugColumns: process.env.node_env !== 'production',
  });

  return (
    <div className="p-2">
      <div className="h-4" />
      <div className="text-xl">{'<div/> (relative)'}</div>
      <div className="overflow-x-auto">
        <div
          {...{
            className: 'divTable',
            style: {
              width: table.getTotalSize(),
            },
          }}
        >
          <div className="thead">
            {table.getHeaderGroups().map((headerGroup, idx) => (
              <div
                {...{
                  key: headerGroup.id,
                  className: 'tr',
                }}
                key={idx}
              >
                {headerGroup.headers.map((header, idx) => (
                  <div
                    {...{
                      key: header.id,
                      className: 'th',
                      style: {
                        width: header.getSize(),
                      },
                    }}
                    key={idx}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    <div
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            {...{
              className: 'tbody',
            }}
          >
            {table.getRowModel().rows.map((row, idx) => (
              <div
                {...{
                  key: row.id,
                  className: 'tr',
                }}
                key={idx}
              >
                {row.getVisibleCells().map((cell, idx) => (
                  <div
                    {...{
                      key: cell.id,
                      className: 'td',
                      style: {
                        width: cell.column.getSize(),
                      },
                    }}
                    key={idx}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResizeTable;
