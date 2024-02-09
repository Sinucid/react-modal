import { PayloadAction, UnknownAction } from "@reduxjs/toolkit"
import { Content, ContentItem } from "../../models"

const CREATE_POST = 'CREATE_POST';
type CreateAction = PayloadAction<Omit<ContentItem, 'id'>, typeof CREATE_POST>
type Actions = CreateAction | UnknownAction;

export function addContentOld(payload: Omit<ContentItem, 'id'>) {
  return {
    type: CREATE_POST,
    payload,
  }
}

const initialState: Content = {
  content: []
}

export default function oldContentReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CREATE_POST: {
      console.log(action);
      
      const newItem = { ...(action.payload as Omit<ContentItem, 'id'>), id: String(Math.random()) }
      state.content = [ ...state.content, newItem ];
      break;
    }
    default:
      return state;
  }
}