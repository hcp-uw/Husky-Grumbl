from fastapi import FastAPI, Query
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from restaurants import get_food_recommendations
from restaurants import get_user_coordinates

# Create a FastAPI instance
app = FastAPI()

# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/greeting/{name}")
async def read_item(name: str):
    return {"message": f"Hello {name}"}

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,                             # CORS middleware class
    allow_origins=["http://localhost:3000"],    # Only allow requests from this origin
    allow_credentials=True,                     # Lets browser access response cookies, auth headers, etc.
    allow_methods=["*"],                        # Allow all request methods
    allow_headers=["*"],                        # Allow all request headers
)


# # Endpoint to get recommendations
@app.get("/recommendations")
async def get_recommendations(
    # latitude: str = Query(..., description="Latitude"),
    # longitude: str = Query(..., description="Longitude"),
    # location: str = Query(..., description="Location"),
    location: str = Query(' ', description="Location"),
    keywords: str = Query('', description="Keyword for restaurant search"),
    minPrice: int = Query(0, description="Minimum price level ($-$$$$)"),  # Minimum price ($)
    maxPrice: int = Query(4, description="Maximum price level ($-$$$$)"),  # Maximum price ($$$$)
    openNow: bool = Query(True, description="Whether only open restaurants should be returned"),
    radius: int = Query(1000, description="Radius in meters for search area"),
):
    # Call the get_food_recommendations function and pass the necessary parameters
    # location = "4321 9th Ave NE, Seattle, WA 98105"
    lat, long= get_user_coordinates("AIzaSyCxduNEld5Ek1zYcr7nlrVLhJBBwlH1Fy4", location)
    # latitude = "43.66020092599859"
    # longitude = "-122.31909118167822"
    print(lat, long)
    # recommendations = get_food_recommendations(latitude, longitude, keywords, minPrice, maxPrice, openNow, radius)
    recommendations = get_food_recommendations(lat, long, keywords, minPrice, maxPrice, openNow, radius)

    return recommendations
    # return []


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
    