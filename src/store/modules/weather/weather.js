
import { apiStatus } from "../../../api/constants/apiStatus";
const { IDLE } = apiStatus;

const state = {
  weatherData: [],
  weatherFetchingStatus: IDLE,
  weatherFetchingError: null,
  weatherFetchingErrorMessage: ''
}

