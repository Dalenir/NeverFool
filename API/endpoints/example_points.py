from fastapi import APIRouter, Path

router = APIRouter()

@router.get("/")
async def root():
    return {"message": "FastAPI is running!"}


@router.get("/example_path_operation/{name}")
async def example_path_operation(name: str = Path(regex="^[a-zA-Z0-9_]*$")):
    return {"message": f"Hello {name}"}
