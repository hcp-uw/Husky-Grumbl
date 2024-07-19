from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/save-location', methods=['POST'])
def save_location():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    keyword = data.get('keyword', '')
    minprice = data.get('minprice', 0)
    maxprice = data.get('maxprice', 4)
    opennow = data.get('opennow', True)
    radius = data.get('radius', 1000)
    
    print(f"Received location: Latitude - {latitude}, Longitude - {longitude}")
    print(f"Keyword: {keyword}, Min Price: {minprice}, Max Price: {maxprice}, Open Now: {opennow}, Radius: {radius}")

    # You can add more processing or saving to a database here

if __name__ == '__main__':
    app.run(debug=True)
