import random
import geocoder
import requests
import json
import geopy.distance
import restaurant

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
    # restAttributesList = ["name", "businessStatus", "openNow", "priceLevel", "rating", "totalUserRatings", "distance", "address"]
    restInstVarList = build_recs(len(results), results)

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

# class restaurant:
#     def __init__(self):
#         self.name = ""
#         self.businessStatus = ""
#         self.openNow = ""
#         self.priceLevel = ""
#         self.rating = -1
#         self.totalUserRatings = -1
#         self.distance = -1
#         self.address = ""

def build_recs(numPlaces, results):
    restInstVarList = []

    for i in range(numPlaces):
        currPlace = results[i]
        rest = restaurant()

        try:
            name = currPlace["name"]
            rest.name = name
        except KeyError as e:
            pass

        try:
            businessStatus = currPlace["business_status"]
            rest.businessStatus = businessStatus
        except KeyError as e:
            pass

        try:
            openNow = currPlace["opening_hours"]["open_now"]
            rest.openNow = openNow
        except KeyError as e:
            pass

        try:
            priceLevel = currPlace["price_level"]
            rest.priceLevel = priceLevel
        except KeyError as e:
            pass

        try:
            rating = currPlace["rating"]
            rest.rating = rating
        except KeyError as e:
            pass

        try:
            totalUserRatings = currPlace["user_ratings_total"]
            rest.totalUserRatings = totalUserRatings
        except KeyError as e:
            pass

        try:
            placeCoords = currPlace["geometry"]["location"]
            currPlaceCoords = (placeCoords["lat"], placeCoords["lng"])
            distance = geopy.distance.geodesic(currLocCoords, currPlaceCoords).miles
            rest.distance = distance
        except KeyError as e:
            pass

        try:
            address = currPlace["vicinity"]
            rest.address = address
        except KeyError as e:
            pass

        restInstVars = vars(rest)
        restInstVarList.append(restInstVars)

    return restInstVarList

if __name__ == "__main__":
    g = geocoder.ip('me')
    currLocCoords = (g.latlng[0], g.latlng[1])
    latitude = g.latlng[0]
    longitude = g.latlng[1]

    keyword = input("What type of cuisine? (Hit enter for all types)").lower().replace(" ", "%20")
    minprice = input("Minimum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +).")
    maxprice = input("Maximum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +).")
    opennow = input("Do you want it to be open now? (Y or N) ").lower()
    radius = input("What is the maximum distance you are willing to travel in miles? ")

    recommendations = get_food_recommendations(latitude, longitude, keyword, minprice, maxprice, opennow, radius)

    print(len(recommendations), " restaurants found!")
    for r in recommendations:
        print(r["name"] + ": ")
        for attr, value in r.items():
            print(f"\t{attr}: {value}")
        print("\n")

    if recommendations:
        randomChoice = random.choice(recommendations)
        print(randomChoice["name"] + ": ")
        for attr, value in randomChoice.items():
            print(f"\t{attr}: {value}")


# keyword = input("What type of cuisine? (Hit enter for all types)").lower().replace(" ", "%20")
# keyword = "&keyword=" + keyword
# url = url + keyword

# minprice = input("Minimum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +).")
# if minprice != "":
#     minprice = "&minprice=" + minprice
#     url = url + minprice

# maxprice = input("Maximum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +).")
# if maxprice != "":
#     maxprice = "&maxprice=" + maxprice
#     url = url + maxprice

# opennow = input("Do you want it to be open now? (Y or N) ").lower()
# if opennow == "y":
#     opennow = "&opennow=true"
#     url = url + opennow
# elif opennow == "n":
#     opennow = "&opennow=false"
#     url = url + opennow

# radius = input("What is the maximum distance you are willing to travel in miles? ")
# if radius != "":
#     radius = str(round(float(radius) * 1609.34))
#     radius = "&radius=" + radius
#     url = url + radius
# else:
#     url = url + "&radius=3200"

# type = "&type=restaurant"
# url = url + type

# url = url + my_api_key


# for r in restInstVarList:
#     print(r["name"] + ": ")
#     for i in range(1, 8):
#         a = restAttributesList[i]
#         print("\t" + a + ": " + str(r[a]))
#     print("\n")
