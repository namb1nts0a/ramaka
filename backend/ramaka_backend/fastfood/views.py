import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class OverpassAPI(APIView):
    def get(self, request, *args, **Kwargs):
        overpass_url = "http://overpass-api.de/api/interpreter"
        overpass_query = """
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
        try:
            response = requests.get(overpass_url, params={'data' : overpass_query})
            response.raise_for_status()
            data = response.json()
            return Response(data, status=status.HTTP_200_OK)
        except requests.exceptions.RequestException as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)