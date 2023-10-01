from logging import getLogger
from typing import List

from fastapi import APIRouter, Depends

from extras import (
    ClubException,
    db,
    validateSession,
    validateSig,
    statusCodes,
    Issue
)

logger = getLogger(__name__)

router = APIRouter(
    prefix="/api/v1/issues",
    tags=[""],
    responses={404: {"description": "Not found"}},
)


@router.get("")
async def fetchIssues(skip: int = 0, limit: int = 20) -> List[Issue]:
    cursor = db.issues.find({}).skip(skip).limit(limit)
    items = await cursor.to_list(limit)
    return [Issue(**item) for item in items]


@router.post(
    "",
    dependencies=[Depends(validateSig), Depends(validateSession)]
)
async def addIssue(item: Issue):
    if await db.issues.find_one({"title": item.title}):
        raise ClubException(
            statusCodes.ITEM_EXISTS,
            "Item Already Exists",
            "Tried to insert item, which already exists in DB"
        )
    await db.issues.insert_one(item.model_dump())
    return item.model_dump() | {"api:statuscode": statusCodes.SUCCESS}


@router.patch(
    "",
    dependencies=[Depends(validateSig), Depends(validateSession)]
)
async def updateIssue(item: Issue):
    issue = await db.issues.find_one({"title": item.title})
    if not issue:
        raise ClubException(
            statusCodes.NOT_FOUND,
            "Issue not Found"
            "title not in database"
        )
    
    await db.issues.update_one({"title": item.title}, {"$set": {k: v for k, v in item.model_dump().items() if v}})
    return {k: v if v else issue[k] for k, v in item.model_dump().items()} | {"api:statuscode": statusCodes.SUCCESS}


@router.delete(
    "",
    dependencies=[Depends(validateSig), Depends(validateSession)]
)
async def removeIssue(item: Issue):
    issue = await db.issues.find_one({"title": item.title})
    if not issue:
        raise ClubException(
            statusCodes.NOT_FOUND,
            "Issue not Found",
            "title not in database"
        )
    
    await db.issues.delete_one({"title": item.title})
    return {"api:statuscode": statusCodes.SUCCESS}
