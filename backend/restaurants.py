import random
import geocoder
import requests
import json
from geopy.distance import geodesic
from restaurant import Restaurant

my_api_key = "&key=AIzaSyCxduNEld5Ek1zYcr7nlrVLhJBBwlH1Fy4" # (Shreya's Key)
# my_api_key = "&key=AIzaSyBsfTYeutSAt0mTeJ-_tSWas2lhlymwIlE" # (Mayee's Key)

def get_user_coordinates(api_key, address):
    url = f'https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={api_key}'
    response = requests.get(url)

    if(response.status_code == 200): # 200 means no error code
        data = response.json()
        if(data['status'] == 'OK'):
            # extracting the coordinates
            location = data['results'][0]['geometry']['location']
            latitude = location['lat']
            longitude = location['lng']
            return latitude, longitude
        else:
            print(f"Error: {data['status']}")
            return None
    else:
        print(f"Request failed with status code {response.status_code}")
        return None

def get_food_recommendations(latitude, longitude, keyword, minprice, maxprice, opennow, radius):
    # Build the Google Places API URL with the price level range
    url = build_url(latitude, longitude, keyword, minprice, maxprice, opennow, radius)
    
    # Send a request to Google Places API
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
    
    # Build recommendations and apply additional filtering
    restInstVarList = build_recs(numPlaces, results, currLocCoords, minprice, maxprice)

    return restInstVarList



def build_url(latitude, longitude, keyword, minprice, maxprice, opennow, radius):
    currLocCoordsURL = str(latitude) + "%2C" + str(longitude)
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currLocCoordsURL

    url += "&keyword=" + keyword 

    if minprice != "":
        url += "&minprice=" + str(minprice)  # Pass the minimum price

    if maxprice != "":
        url += "&maxprice=" + str(maxprice)  # Pass the maximum price

    if opennow == "y":
        url += "&opennow=true"
    elif opennow == "n":
        url += "&opennow=false"

    if radius != "":
        url += "&radius=" + str(round(float(radius) * 1609.34))  # Convert miles to meters
    else:
        url += "&radius=3200"

    url += "&type=restaurant" + my_api_key  # Append API key

    return url

def build_recs(numPlaces, results, currLocCoords, minprice, maxprice):
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
            # Only include restaurants within the price range
            if priceLevel < minprice or priceLevel > maxprice:
                continue  # Skip restaurants outside the price range
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
