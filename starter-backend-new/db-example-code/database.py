from os import getenv
import asyncpg
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function that creates a connection pool
async def create_db_pool():

    print([getenv("DB_USER"),getenv("DB_PASSWORD"), getenv("DB_NAME"), getenv("DB_HOST")])

    # Create connection pool using credentials from .env file
    return await asyncpg.create_pool(
        user = getenv("DB_USER"),
        password = getenv("DB_PASSWORD"),
        database = getenv("DB_NAME"),
        host = getenv("DB_HOST"),
    )
