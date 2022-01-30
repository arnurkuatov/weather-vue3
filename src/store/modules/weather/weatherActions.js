import { fetchWeatherApi } from "../../../api/weatherApi";
import { withAsync } from "../../../api/helpers/withAsync";
import { apiPendingFactory, apiSuccessFactory, apiErrorFactory} from "../../../api/helpers/apiStateFactory";

export default {
  async fetchWeatherActions(context) {
    context.commit('SET_WEATHER_STATE', apiPendingFactory());
    const { response, error } = await withAsync(fetchWeatherApi);
    console.log('response', response);

    if (error) {
      context.commit(
        'SET_WEATHER_STATE',
        apiErrorFactory(error, error.message)
      )
    }
    context.commit(
      'SET_WEATHER_STATE',
      apiSuccessFactory(response)
    )
  }
}
