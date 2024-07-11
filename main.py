import requests
import base64

client_id = '35d1e2bb1f0f464a93e5cd8e3652d538'
client_secret = '0990e6c6bdc74489b25c86bbb162f6f7'

# Combine Client ID and Client Secret into a base64 encoded string
auth_str = f"{client_id}:{client_secret}"
b64_auth_str = base64.b64encode(auth_str.encode()).decode()

# Get the access token
token_url = "https://accounts.spotify.com/api/token"
headers = {
    "Authorization": f"Basic {b64_auth_str}",
    "Content-Type": "application/x-www-form-urlencoded"
}
data = {
    "grant_type": "client_credentials"
}

response = requests.post(token_url, headers=headers, data=data)
access_token = response.json().get("access_token")

print(f"Access Token: {access_token}")
