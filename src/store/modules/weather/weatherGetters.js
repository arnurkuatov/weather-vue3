export default {
  getWeatherData: (state) => state.weatherData,
  getWeatherStatus: (state) => state.weatherFetchingStatus,
  getWeatherFetchingError: (state) => state.weatherFetchingError,
  getWeatherFetchingErrorMessage: (state) => state.weatherFetchingErrorMessage,
}
