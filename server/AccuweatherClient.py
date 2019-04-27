import requests

# Accuweather API key
SECRET_KEY = "KwDARgjJ91Ka7VuVLYvOShmZXUCctrhd"
BASE = "http://dataservice.accuweather.com/"

def get_location_key(ip):
    TARGET = "locations/v1/cities/ipaddress"
    payload = { "apikey": SECRET_KEY, "q": ip }
    url = BASE + TARGET
    request = requests.get(url, params=payload)
    data = request.json()
    return get_5day_forecast(data["Key"])


def get_5day_forecast(key):
    TARGET = "forecasts/v1/daily/5day/{}".format(key)
    payload = { "apikey": SECRET_KEY, "details": True }
    url = BASE + TARGET
    request = requests.get(url, params=payload)
    return request.json()
