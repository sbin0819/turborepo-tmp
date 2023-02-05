import ResizeTable from './ResizeTable';
import VirtualizedRow from './VirtualizedRow';
import Visibility from './Visibility';
import Grouping from './Grouping';
import { Pagination } from './Filter';

export const tables = {
  [Visibility.name.toLowerCase()]: <Visibility />,
  [ResizeTable.name.toLowerCase()]: <ResizeTable />,
  [VirtualizedRow.name.toLowerCase()]: <VirtualizedRow />,
  [Pagination.name.toLowerCase()]: <Pagination />,
  [Grouping.name.toLowerCase()]: <Grouping />,
};

// export { default as ResizeTable } from './ResizeTable';
// export { default as VirtualizedRow } from './VirtualizedRow';
// export { default as Pagination } from './Filter/Pagination';
// export { default as Grouping } from './Grouping';
