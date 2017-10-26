import { handleActions } from 'redux-actions';

import { receivedNewStory, fetchNewStories } from 'new/new.actions';

export default handleActions(
  {
    [receivedNewStory().type](state, action) {
      const { item, index } = action.payload;
      return state.map((_item, _index) => {
        if (_index !== index) return _item;
        return item;
      });
    },
    [fetchNewStories().type](state) {
      return state.map(() => ({ _loading: true, _loaded: false }));
    },
  },
  new Array(100).fill({
    _loaded: false,
    _loading: true,
  })
);
