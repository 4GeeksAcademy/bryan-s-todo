import AppDispatcher from '../AppDispatcher.js';
import { TODO_CREATE, TODO_DELETE } from './TodoConstants';

class TodoActions {
  create(text) {
    AppDispatcher.dispatch({
      actionType: TODO_CREATE,
      text: text,
    });
  }

  delete(id) {
    AppDispatcher.dispatch({
      actionType: TODO_DELETE,
      id: id,
    });
  }
}

export default new TodoActions();
