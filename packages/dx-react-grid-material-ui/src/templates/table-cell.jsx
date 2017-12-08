import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  TableCell as TableCellMUI,
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  cell: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 3,
    },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cellRightAlign: {
    textAlign: 'right',
  },
});

const TableCellBase = ({
  style, column, value, children, classes,
  tableRow, tableColumn, row,
  className,
  ...restProps
}) => (
  <TableCellMUI
    style={{
      ...style,
    }}
    className={classNames({
      [classes.cell]: true,
      [classes.cellRightAlign]: column.align === 'right',
    }, className)}
    {...restProps}
  >
    {children || value}
  </TableCellMUI>
);

TableCellBase.propTypes = {
  style: PropTypes.object,
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.object,
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string,
};

TableCellBase.defaultProps = {
  style: null,
  value: undefined,
  column: {},
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};

export const TableCell = withStyles(styles, { name: 'TableCell' })(TableCellBase);