import React, { PropTypes } from 'react';
import { Paper, ConnectionTable, ConnectionRow } from '../../common';

const Receipts = props => (
  <Paper zDepth={2}>
    <ConnectionTable relay={props.relay} data={props.viewer.receiptConnection}>
      <ConnectionRow
        header="Number"
        fetchValue={node => node.number}
      />
      <ConnectionRow
        header="Total"
        fetchValue={node => `${node.total} kn`}
      />
      <ConnectionRow
        header="Receipt date"
        fetchValue={node => node.date}
      />
      <ConnectionRow
        header="Created"
        fetchValue={node => node.created}
      />
      <ConnectionRow
        header="Updated"
        fetchValue={node => node.updated}
      />
    </ConnectionTable>
  </Paper>
);

Receipts.propTypes = {
  relay: PropTypes.shape({}).isRequired,
  viewer: PropTypes.shape({
    receiptConnection: PropTypes.shape({
      ...ConnectionTable.propTypes.data
    })
  }).isRequired,
};

export default Receipts;
