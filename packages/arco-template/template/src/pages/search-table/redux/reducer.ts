import { PaginationProps } from '@arco-design/web-react/es/Pagination/pagination';
import { UPDATE_LIST, UPDATE_LOADING, UPDATE_PAGINATION, UPDATE_FORM_PARAMS } from './actionTypes';

const initialState = {
  data: [],
  pagination: {
    sizeCanChange: true,
    showTotal: true,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  },
  loading: true,
  formParams: {},
};

interface FormParams {
  [key: string]: string;
}

export interface SearchTableState {
  data?: any[];
  pagination?: PaginationProps;
  formParams?: FormParams;
  loading?: boolean;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIST: {
      const { data } = action.payload;

      return {
        ...state,
        data,
      };
    }
    case UPDATE_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    case UPDATE_PAGINATION: {
      const { pagination } = action.payload;
      return {
        ...state,
        pagination,
      };
    }
    case UPDATE_FORM_PARAMS: {
      const { params } = action.payload;
      return {
        ...state,
        formParams: params,
      };
    }
    default:
      return state;
  }
}
