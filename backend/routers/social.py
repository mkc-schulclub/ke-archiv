from logging import getLogger

from fastapi import APIRouter, Depends

from extras import (
    db,
    validateSession,
    validateSig,
    statusCodes,
    Social
)

logger = getLogger(__name__)

router = APIRouter(
    prefix="/api/v1/socials",
    tags=[""],
    responses={404: {"description": "Not found"}},
)


@router.get("")
async def fetchSocials() -> Social:
    return Social(**(await db.socials.find_one({})))


@router.patch(
    "",
    dependencies=[Depends(validateSig), Depends(validateSession)]
)
async def updateSocials(item: Social):
    current = await db.socials.find_one({})

    await db.socials.update_one({"_id": current["_id"]}, {"$set": {k: v for k, v in item.model_dump().items() if v}})
    return {k: v if v else current[k] for k, v in item.model_dump().items()} | {"api:statuscode": statusCodes.SUCCESS}
