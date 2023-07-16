import { ReduceStore } from 'flux/utils';
import { TODO_CREATE, TODO_DELETE } from './actions/TodoConstants';
import AppDispatcher from './AppDispatcher';

class TodoStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.actionType) {
      case TODO_CREATE:
        return [...state, action.text];

      case TODO_DELETE:
        return state.filter((todo, idx) => idx !== action.id);

      default:
        return state;
    }
  }
}

export default new TodoStore();
