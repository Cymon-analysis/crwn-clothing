import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
=======
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
>>>>>>> f11a1ed058659c3c75e113f6d338e8697eb826de

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

<<<<<<< HEAD
const Directory = ({ sections }) => (
=======
const Directory= ({ sections }) => (
>>>>>>> f11a1ed058659c3c75e113f6d338e8697eb826de
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
<<<<<<< HEAD
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
=======
)

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})
>>>>>>> f11a1ed058659c3c75e113f6d338e8697eb826de

export default connect(mapStateToProps)(Directory);
