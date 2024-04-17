import random
import geocoder
import requests
import json
import geopy.distance

my_api_key = "&key=AIzaSyCxduNEld5Ek1zYcr7nlrVLhJBBwlH1Fy4"
g = geocoder.ip('me')
currLocCoords = (g.latlng[0], g.latlng[1])
currLocCoordsURL = str(g.latlng[0]) + "%2C" + str(g.latlng[1])
url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currLocCoordsURL