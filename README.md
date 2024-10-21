# Husky Grumbl
Husky Grumbl is a restaurant searching web application for UW students. It filters nearby restaurants based on each user’s preferences. 

# Key Features
Users can indicate their restaurant preferences based on cuisine, price range, open status, and proximity to current location. Users also have the option to input an address to indicate where they want the restaurants to be located.  

# Demo 
# Technology Stack
# How to Install + Run the Project
To use this application, you will need to generate your own API key on the Google Maps Platform Credentials page. Follow the instructions on the website to create your own API key and copy this key. Next, open up the project and navigate to backend > restaurants.py. Assign the my_api_key variable to your key and save the restaurants.py file. 

Next, make sure you have fastapi, uvicorn, and geopy installed (run pip install ...). Then run npm install to install all dependencies for Node.js. 

You should now be able to run the project. Navigate to the backend folder in the terminal (cd HuskyGrumbl/backend) and run python main.py. Open a new terminal and naviage to the frontend folder in the terminal (cd HuskyGrumbl/frontend). Run the command npm run start and you should be able to view and use the website on http://localhost:3000.

# How to Use the Website
When users first open the website, they will be landing in the Husky-Grumbl homepage. With our website mascot greeting the user, the user can scroll down to the bottom of the page and click on the "get started" button to start navigating the webpage. Next, they should see the filter options on the left bar. There are check boxes for cuisine preferences, a slider for price level, check boxes for dietary restrictions, a checkbox for open status, and a slider for distance. Once users set their preferences, they can press search and see the list of restaurants show up on the right side. Once restaurant recommendations show up, the names of different restaurants will all show up as separate result boxes, along with the restaurant's overall ratings, number of customer ratings, their price range ($ to $$$$), and their distance from the user's current location. From these results, users can freely choose which restaurants they wish to go to and gain general data about the restaurant. 

# Contributers 
- Shreya Pandey: Project Manager/Backend Lead Developer
- Neha Pinni: Frontend Lead Developer  
- Raiden Santos: Frontend Developer 
- Shayna Suzuki: Frontend Developer 
- Kevin Kim: Backend Developer 
- Mayee Sun: Backend Developer
- Varun Shinde: Backend Developer
