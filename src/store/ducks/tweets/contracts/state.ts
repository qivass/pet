import { LoadingState } from "../../common/constants";

export interface Tweet {
  id?: number
  _id?: string,
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  }
  text: string,
}


export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
}
