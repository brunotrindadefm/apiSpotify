import requests

access_token = 'BQDtufYnIdbzhYZ-krbc_L4JpPoVbTXbkKcv1fzDt5f_vlVvgDcaB34zKjVA9WMt_9Pb6lb8GwMAJHgI1HnY6nh6O1Vqt1FCbvW67E-yXn3LA7ybTIY'
headers = {
    "Authorization": f"Bearer {access_token}"
}

search_url = "https://api.spotify.com/v1/search"
params = {
    "q": "artist:radiohead",
    "type": "artist"
}

response = requests.get(search_url, headers=headers, params=params)
print(response.json())
