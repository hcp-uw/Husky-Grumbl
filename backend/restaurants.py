import random
import geocoder
import requests
import json
from geopy.distance import geodesic
from restaurant import Restaurant

# my_api_key = "&key=AIzaSyCxduNEld5Ek1zYcr7nlrVLhJBBwlH1Fy4" # (Shreya's Key)
my_api_key = "&key=AIzaSyBsfTYeutSAt0mTeJ-_tSWas2lhlymwIlE" # (Mayee's Key)

def get_food_recommendations(latitude, longitude, keyword, minprice, maxprice, opennow, radius):
    url = build_url(latitude, longitude, keyword, minprice, maxprice, opennow, radius)
    response = requests.request("GET", url)
    response = json.loads(response.text)
    status = response['status']

    if status == "OK":
        results = response["results"]
    else:
        print(status)
        return []

    numPlaces = len(results)
    currLocCoords = (latitude, longitude)
    restInstVarList = build_recs(numPlaces, results, currLocCoords)

    return restInstVarList

def build_url(latitude, longitude, keyword, minprice, maxprice, opennow, radius):
    # g = geocoder.ip('me')
    # currLocCoords = (g.latlng[0], g.latlng[1])
    # currLocCoordsURL = str(g.latlng[0]) + "%2C" + str(g.latlng[1])
    currLocCoordsURL = str(latitude) + "%2C" + str(longitude)
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currLocCoordsURL

    url += "&keyword=" + keyword 

    if minprice != "":
        url += "&minprice=" + minprice

    if maxprice != "":
        url += "&maxprice=" + maxprice

    if opennow == "y":
        url += "&opennow=true"
    elif opennow == "n":
        url += "&opennow=false"

    if radius != "":
        url += "&radius=" + str(round(float(radius) * 1609.34))
    else:
        url += "&radius=3200"

    url += "&type=restaurant" + api_key

    return url

def build_recs(numPlaces, results, currLocCoords):
    restInstVarList = []

    for i in range(numPlaces):
        currPlace = results[i]
        rest = Restaurant()

        try:
            name = currPlace["name"]
            rest.name = name
        except KeyError:
            pass

        try:
            businessStatus = currPlace["business_status"]
            rest.business_status = businessStatus
        except KeyError:
            pass

        try:
            openNow = currPlace["opening_hours"]["open_now"]
            rest.open_now = openNow
        except KeyError:
            pass

        try:
            priceLevel = currPlace["price_level"]
            rest.price_level = priceLevel
        except KeyError:
            pass

        try:
            rating = currPlace["rating"]
            rest.rating = rating
        except KeyError:
            pass

        try:
            totalUserRatings = currPlace["user_ratings_total"]
            rest.total_user_ratings = totalUserRatings
        except KeyError:
            pass

        try:
            placeCoords = currPlace["geometry"]["location"]
            currPlaceCoords = (placeCoords["lat"], placeCoords["lng"])
            distance = geodesic(currLocCoords, currPlaceCoords).miles
            rest.distance = distance
        except KeyError:
            pass

        try:
            address = currPlace["vicinity"]
            rest.address = address
        except KeyError:
            pass

        restInstVars = vars(rest)
        restInstVarList.append(restInstVars)

    return restInstVarList
