from os import getenv
import asyncpg
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function that creates a connection pool
async def create_db_pool():
    return await asyncpg.create_pool(
        user = os.getenv("DB_USER"),
        password = os.getenv("DB_PASSWORD"),
        database = os.getenv("DB_NAME"),
        host = os.getenv("DB_HOST"),
        port=5432
    )

