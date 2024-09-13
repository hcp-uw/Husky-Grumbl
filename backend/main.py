from fastapi import FastAPI, Query
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from restaurants import get_food_recommendations

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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)

# # Endpoint to get recommendations
@app.get("/recommendations")
async def get_recommendations(
    latitude: str = Query(..., description="Latitude"),
    longitude: str = Query(..., description = "Longitude"),
    keywords: str = Query('', description="Keyword for restaurant search"),
    minPrice: int = Query(0, description="Minimum price level ($-$$$$)"),
    maxPrice: int = Query(4, description="Maximum price level ($-$$$$)"),
    openNow: bool = Query(True, description="Whether only open restaurants should be returned"),
    radius: int = Query(1000, description="Radius in meters for search area"),
):
    print("Hello World")
    recommendations = get_food_recommendations(latitude, longitude, keywords, minPrice, maxPrice, openNow, radius)
    return recommendations