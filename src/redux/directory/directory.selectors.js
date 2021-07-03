<<<<<<< HEAD
import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
=======
import { createSelector } from 'reselect'; 

const selectDirectory = state => state.directory; 

export const selectDirectorySections = createSelector(
    [selectDirectory], 
    directory => directory.sections
)
>>>>>>> f11a1ed058659c3c75e113f6d338e8697eb826de
