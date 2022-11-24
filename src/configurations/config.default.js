/* eslint-disable prefer-template */

const CONFIG = process.env.CONFIG || 'default';
const API_URL = process.env.API_URL || 'https://dev-api.digitransit.fi';
const MAP_URL = process.env.MAP_URL || 'https://digitransit-dev-cdn-origin.azureedge.net';
const MAP_VERSION = process.env.MAP_VERSION || 'v2';
const APP_PATH = process.env.APP_CONTEXT || '';
const PORT = process.env.PORT || 8080;
const APP_DESCRIPTION = 'Digitransit journey planning UI';

export default {
  PORT,
  CONFIG,
  URL: {
    API_URL,
    ASSET_URL: process.env.ASSET_URL,
    MAP_URL,
    OTP: process.env.OTP_URL || `${API_URL}/routing/v1/routers/finland/`,
    MAP: {
      default: `${MAP_URL}/map/${MAP_VERSION}/hsl-map/`,
      sv: `${MAP_URL}/map/${MAP_VERSION}/hsl-map-sv/`,
    },
    STOP_MAP: `${MAP_URL}/map/v1/finland-stop-map/`,
    FONT:
      'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700',
    WEATHER_DATA:
      'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::simple&timestep=5&parameters=temperature,WindSpeedMS,WeatherSymbol3',
    EMBEDDED_SEARCH_GENERATION: '/reittihakuelementti',
  },

  APP_PATH: `${APP_PATH}`,
  indexPath: '',
  title: 'Reittihaku',

  // Navbar logo
  logo: 'default/digitransit-logo.png',

  // Default labels for manifest creation
  name: 'Digitransit beta',
  shortName: 'Digitransit',

  socialMedia: {
    title: 'Digitransit',
    description: APP_DESCRIPTION,
    locale: 'en_US',

    image: {
      url: '/img/default-social-share.png',
      width: 2400,
      height: 1260,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@hsldevcom',
    },
  },

  meta: {
    description: APP_DESCRIPTION,
    keywords: 'digitransit',
  },

};
