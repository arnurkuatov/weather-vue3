import { apiStatus } from "../../../api/constants/apiStatus";
const { PENDING, SUCCESS, ERROR } = apiStatus;

export default {
  SET_WEATHER_STATE(state, payload) {
    switch (payload.status) {
      case PENDING:
        state.
    }
  }
}
