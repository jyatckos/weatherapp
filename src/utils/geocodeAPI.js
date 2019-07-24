import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  responseType: 'json',
  params: {
    access_token:
      'pk.eyJ1IjoiamR5MjAxNiIsImEiOiJjanlibXJpazUwNmpkM2hwMXRoZGRvc3VyIn0.xxAd29lJTYUqZXTdMdL8MA'
  }
})
