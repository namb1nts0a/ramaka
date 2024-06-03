import requests

endpoint = "http://overpass-api.de/api/interpreter"
query = """
[out:json];
area["name"="Fianarantsoa"]->.searchArea;
(
  node["amenity"="fast_food"](area.searchArea);
  way["amenity"="fast_food"](area.searchArea);
  relation["amenity"="fast_food"](area.searchArea);
);
out body;
>;
out skel qt;
"""

response = requests.get(endpoint, params={'data' : query})
print(response.json())
print(response.status_code)