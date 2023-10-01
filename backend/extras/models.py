from datetime import datetime
from typing import Optional, List, Dict

from pydantic import BaseModel

class Issue(BaseModel):
    title:       str                      = ""
    description: str                      = ""
    date:        str                      = ""
    url:         str                      = ""
    tops:        Dict[str, str]           = {}


class User(BaseModel):
    name: str
    _id: str
    admin: bool


class Social(BaseModel):
    instagram:  str
    webshop:    str
    email:      str
    youtube:    str
    linktree:   str
