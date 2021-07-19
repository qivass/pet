import { LoadingState } from "../../common/constants";
import { Tweet } from "../../tweets/contracts/state";

export interface TweetState {
  data?: Tweet;
  loadingState: LoadingState;
}