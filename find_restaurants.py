import random
import geocoder
import requests
import json
import geopy.distance
from geopy import distance

my_api_key = "&key=AIzaSyCxduNEld5Ek1zYcr7nlrVLhJBBwlH1Fy4"
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



address = input("Enter Address: ")
currLocCoords= get_user_coordinates(my_api_key[5:], address)
print('User coordinates: ' + str(currLocCoords))

currLocCoordsURL = ""
if(currLocCoords):
    currLocCoordsURL = str(currLocCoords[0]) + "%2C" + str(currLocCoords[1])
else:
    print("Unable to fetch your location. Set default location to the University of Washington")
    currLocCoords = (47.655860161693504, -122.30954131041663)
    currLocCoordsURL = str(currLocCoords[0]) + "%2C" + str(currLocCoords[1])
url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currLocCoordsURL





keyword = input("What type of cuisine? (Hit enter for all types) ").lower().replace(" ", "%20")
keyword = "&keyword=" + keyword
url = url + keyword

minprice = input("Minimum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +). ")
if minprice != "":
    maxprice = "&minprice=" + minprice
    url = url + maxprice

maxprice = input("Maximum price? Enter $ for inexpensive (under $10), $$ for moderately expensive ($10 - $25), $$$ for expensive ($25 - $45), $$$$ for very expensive ($50 +). ")
if maxprice != "":
    maxprice = "&maxprice=" + maxprice
    url = url + maxprice

opennow = input("Do you want it to be open now? (Y or N) ").lower()
if opennow == "y":
    opennow = "&opennow=true"
    url = url + opennow
elif opennow == "n":
    opennow = "&opennow=false"
    url = url + opennow

radius = input("What is the maximum distance you are willing to travel in miles? ")
if radius != "":
    radius = str(round(float(radius) * 1609.34))
    radius = "&radius=" + radius
    url = url + radius
else:
    url = url + "&radius=3200"

type = "&type=restaurant"
url = url + type

url = url + my_api_key
response = requests.request("GET", url)

response = json.loads(response.text)
status = response['status']
if status == "OK":
    results = response["results"]
else:
    print(status)
    exit()

numPlaces = len(results)
restAttributesList = ["name", "businessStatus", "openNow", "priceLevel", "rating", "totalUserRatings", "distance", "address"]
restInstVarList = []

class restaurant:
    def __init__(self):
        self.name = ""
        self.businessStatus = ""
        self.openNow = ""
        self.priceLevel = ""
        self.rating = -1
        self.totalUserRatings = -1
        self.distance = -1
        self.address = ""
        
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


        # print(currLocCoords, currPlaceCoords)
        # distance2 = distance.distance(currPlaceCoords, currLocCoords).miles

        # print('distance: ' + distance)
        # print('distance2: ' + distance2)
        
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

for r in restInstVarList:
    print(r["name"] + ": ")
    print(currLocCoords)
    print(placeCoords)
    print()
    for i in range(1, 8):
        a = restAttributesList[i]
        print("\t" + a + ": " + str(r[a]))
    print("\n")

randomChoice = random.choice(restInstVarList)
print(randomChoice["name"] + ": ")
for i in range(1, 8):
    a = restAttributesList[i]
    print("\t" + a + ": " + str(randomChoice[a]))
    

