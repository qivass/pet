import { LoadingState } from "../../common/constants";

export interface Tag {
  _id: number;
  name: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  loadingState: LoadingState;
}