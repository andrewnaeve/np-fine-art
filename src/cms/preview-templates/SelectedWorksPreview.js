import React from 'react';
import PropTypes from 'prop-types';

import PortfolioImage from '../../components/selected-works/PortfolioImage';

const SelectedWorksPreview = data => {
  console.log('cms data', data);
  const { entry } = data;

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
