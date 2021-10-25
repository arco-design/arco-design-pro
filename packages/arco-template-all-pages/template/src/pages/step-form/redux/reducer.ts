import {
  UPDATE_FORM,
  UPDATE_LOADING,
  GO_NEXT,
  GO_PREV,
  UPDATE_ACTIVE_KEYS,
  GO,
} from './actionTypes';

const initialState = {
  data: {},
  loading: true,
  step: 1,
  activeKeys: ['baseConfig'],
};

export interface StepFormState {
  data: any;
  loading: boolean;
  step: number;
  activeKeys: string[];
}

export default (state: StepFormState = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM: {
      const { data } = action.payload;
      return {
        ...state,
        data: Object.assign({}, state.data, data),
      };
    }
    case UPDATE_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    case GO: {
      const { step } = action.payload;
      return {
        ...state,
        step,
      };
    }
    case GO_NEXT: {
      return {
        ...state,
        step: state.step + 1,
      };
    }
    case GO_PREV: {
      return {
        ...state,
        step: state.step - 1,
      };
    }
    case UPDATE_ACTIVE_KEYS: {
      const { activeKeys } = action.payload;
      return {
        ...state,
        activeKeys,
      };
    }
    default:
      return state;
  }
};
