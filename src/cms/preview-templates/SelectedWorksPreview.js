import React from 'react';
import PropTypes from 'prop-types';

import PortfolioImage from '../../components/select-work/PortfolioImage';

const SelectedWorksPreview = data => {
  const { entry } = data;
  console.log('haha', entry.getIn(['data', 'title']));
  return (
    <PortfolioImage
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
    />
  );
};

SelectedWorksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default SelectedWorksPreview;
