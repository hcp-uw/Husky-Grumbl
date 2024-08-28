from flask import Flask, request, jsonify
from flask_cors import CORS
from restaurants import get_food_recommendations

app = Flask(__name__)
CORS(app)

@app.route('/save-location', methods=['POST'])
def save_location():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    keywords = data.get('keywords', '')
    minprice = data.get('minprice', 0)
    maxprice = data.get('maxprice', 4)
    opennow = data.get('opennow', True)
    radius = data.get('radius', 1000)
    
    # Call func in restaurants.ppy to recommend food options
    recommendations = get_food_recommendations(latitude, longitude, keywords, minprice, maxprice, opennow, radius)

    # Debugging
    print(f"Received location: Latitude - {latitude}, Longitude - {longitude}")
    print(f"Keywords: {keywords}, Min Price: {minprice}, Max Price: {maxprice}, Open Now: {opennow}, Radius: {radius}")

    return jsonify(recommendations)


if __name__ == '__main__':
    app.run(port=5000)
