from os import getenv

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware

from extras import ClubException, LOGGER, boolFromString
from routers import __all__

app = FastAPI(
    title="Schulclub API",
    description="Schulclub API",
    version="0.1.0"
)


@app.exception_handler(ClubException)
async def club_exception_handler(request: Request, exc: ClubException):
    LOGGER.warning(f"Faced ClubException): [{exc.code}] {exc.debug or exc.message}")
    return JSONResponse(
        status_code=400,
        content={
            "api:statuscode": exc.code,
            "api:message": exc.message,
            "api:debug": exc.debug if boolFromString(getenv("DEBUG")) else "",
        },
    )

app.add_middleware(CORSMiddleware, allow_origins=["*"],  allow_credentials=True, allow_methods=["*"], allow_headers=["*"], )

for router in __all__:
    app.include_router(router)