import json
import logging
from typing import List, Optional

from datetime import datetime, date

from fastapi import APIRouter, Body, Depends, HTTPException, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_db
from services.payment_settings import Payment_settingsService
from dependencies.auth import get_current_user
from schemas.auth import UserResponse

# Set up logging
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1/entities/payment_settings", tags=["payment_settings"])


# ---------- Pydantic Schemas ----------
class Payment_settingsData(BaseModel):
    """Entity data schema (for create/update)"""
    provider: str
    public_key: str = None
    secret_key: str = None
    is_active: bool = None
    environment: str = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


class Payment_settingsUpdateData(BaseModel):
    """Update entity data (partial updates allowed)"""
    provider: Optional[str] = None
    public_key: Optional[str] = None
    secret_key: Optional[str] = None
    is_active: Optional[bool] = None
    environment: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


class Payment_settingsResponse(BaseModel):
    """Entity response schema"""
    id: int
    user_id: str
    provider: str
    public_key: Optional[str] = None
    secret_key: Optional[str] = None
    is_active: Optional[bool] = None
    environment: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class Payment_settingsListResponse(BaseModel):
    """List response schema"""
    items: List[Payment_settingsResponse]
    total: int
    skip: int
    limit: int


class Payment_settingsBatchCreateRequest(BaseModel):
    """Batch create request"""
    items: List[Payment_settingsData]


class Payment_settingsBatchUpdateItem(BaseModel):
    """Batch update item"""
    id: int
    updates: Payment_settingsUpdateData


class Payment_settingsBatchUpdateRequest(BaseModel):
    """Batch update request"""
    items: List[Payment_settingsBatchUpdateItem]


class Payment_settingsBatchDeleteRequest(BaseModel):
    """Batch delete request"""
    ids: List[int]


# ---------- Routes ----------
@router.get("", response_model=Payment_settingsListResponse)
async def query_payment_settingss(
    query: str = Query(None, description="Query conditions (JSON string)"),
    sort: str = Query(None, description="Sort field (prefix with '-' for descending)"),
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(20, ge=1, le=2000, description="Max number of records to return"),
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Query payment_settingss with filtering, sorting, and pagination (user can only see their own records)"""
    logger.debug(f"Querying payment_settingss: query={query}, sort={sort}, skip={skip}, limit={limit}, fields={fields}")
    
    service = Payment_settingsService(db)
    try:
        # Parse query JSON if provided
        query_dict = None
        if query:
            try:
                query_dict = json.loads(query)
            except json.JSONDecodeError:
                raise HTTPException(status_code=400, detail="Invalid query JSON format")
        
        result = await service.get_list(
            skip=skip, 
            limit=limit,
            query_dict=query_dict,
            sort=sort,
            user_id=str(current_user.id),
        )
        logger.debug(f"Found {result['total']} payment_settingss")
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error querying payment_settingss: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/all", response_model=Payment_settingsListResponse)
async def query_payment_settingss_all(
    query: str = Query(None, description="Query conditions (JSON string)"),
    sort: str = Query(None, description="Sort field (prefix with '-' for descending)"),
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(20, ge=1, le=2000, description="Max number of records to return"),
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    db: AsyncSession = Depends(get_db),
):
    # Query payment_settingss with filtering, sorting, and pagination without user limitation
    logger.debug(f"Querying payment_settingss: query={query}, sort={sort}, skip={skip}, limit={limit}, fields={fields}")

    service = Payment_settingsService(db)
    try:
        # Parse query JSON if provided
        query_dict = None
        if query:
            try:
                query_dict = json.loads(query)
            except json.JSONDecodeError:
                raise HTTPException(status_code=400, detail="Invalid query JSON format")

        result = await service.get_list(
            skip=skip,
            limit=limit,
            query_dict=query_dict,
            sort=sort
        )
        logger.debug(f"Found {result['total']} payment_settingss")
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error querying payment_settingss: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/{id}", response_model=Payment_settingsResponse)
async def get_payment_settings(
    id: int,
    fields: str = Query(None, description="Comma-separated list of fields to return"),
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get a single payment_settings by ID (user can only see their own records)"""
    logger.debug(f"Fetching payment_settings with id: {id}, fields={fields}")
    
    service = Payment_settingsService(db)
    try:
        result = await service.get_by_id(id, user_id=str(current_user.id))
        if not result:
            logger.warning(f"Payment_settings with id {id} not found")
            raise HTTPException(status_code=404, detail="Payment_settings not found")
        
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching payment_settings {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.post("", response_model=Payment_settingsResponse, status_code=201)
async def create_payment_settings(
    data: Payment_settingsData,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Create a new payment_settings"""
    logger.debug(f"Creating new payment_settings with data: {data}")
    
    service = Payment_settingsService(db)
    try:
        result = await service.create(data.model_dump(), user_id=str(current_user.id))
        if not result:
            raise HTTPException(status_code=400, detail="Failed to create payment_settings")
        
        logger.info(f"Payment_settings created successfully with id: {result.id}")
        return result
    except ValueError as e:
        logger.error(f"Validation error creating payment_settings: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error creating payment_settings: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.post("/batch", response_model=List[Payment_settingsResponse], status_code=201)
async def create_payment_settingss_batch(
    request: Payment_settingsBatchCreateRequest,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Create multiple payment_settingss in a single request"""
    logger.debug(f"Batch creating {len(request.items)} payment_settingss")
    
    service = Payment_settingsService(db)
    results = []
    
    try:
        for item_data in request.items:
            result = await service.create(item_data.model_dump(), user_id=str(current_user.id))
            if result:
                results.append(result)
        
        logger.info(f"Batch created {len(results)} payment_settingss successfully")
        return results
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch create: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch create failed: {str(e)}")


@router.put("/batch", response_model=List[Payment_settingsResponse])
async def update_payment_settingss_batch(
    request: Payment_settingsBatchUpdateRequest,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Update multiple payment_settingss in a single request (requires ownership)"""
    logger.debug(f"Batch updating {len(request.items)} payment_settingss")
    
    service = Payment_settingsService(db)
    results = []
    
    try:
        for item in request.items:
            # Only include non-None values for partial updates
            update_dict = {k: v for k, v in item.updates.model_dump().items() if v is not None}
            result = await service.update(item.id, update_dict, user_id=str(current_user.id))
            if result:
                results.append(result)
        
        logger.info(f"Batch updated {len(results)} payment_settingss successfully")
        return results
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch update: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch update failed: {str(e)}")


@router.put("/{id}", response_model=Payment_settingsResponse)
async def update_payment_settings(
    id: int,
    data: Payment_settingsUpdateData,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Update an existing payment_settings (requires ownership)"""
    logger.debug(f"Updating payment_settings {id} with data: {data}")

    service = Payment_settingsService(db)
    try:
        # Only include non-None values for partial updates
        update_dict = {k: v for k, v in data.model_dump().items() if v is not None}
        result = await service.update(id, update_dict, user_id=str(current_user.id))
        if not result:
            logger.warning(f"Payment_settings with id {id} not found for update")
            raise HTTPException(status_code=404, detail="Payment_settings not found")
        
        logger.info(f"Payment_settings {id} updated successfully")
        return result
    except HTTPException:
        raise
    except ValueError as e:
        logger.error(f"Validation error updating payment_settings {id}: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error updating payment_settings {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.delete("/batch")
async def delete_payment_settingss_batch(
    request: Payment_settingsBatchDeleteRequest,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Delete multiple payment_settingss by their IDs (requires ownership)"""
    logger.debug(f"Batch deleting {len(request.ids)} payment_settingss")
    
    service = Payment_settingsService(db)
    deleted_count = 0
    
    try:
        for item_id in request.ids:
            success = await service.delete(item_id, user_id=str(current_user.id))
            if success:
                deleted_count += 1
        
        logger.info(f"Batch deleted {deleted_count} payment_settingss successfully")
        return {"message": f"Successfully deleted {deleted_count} payment_settingss", "deleted_count": deleted_count}
    except Exception as e:
        await db.rollback()
        logger.error(f"Error in batch delete: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Batch delete failed: {str(e)}")


@router.delete("/{id}")
async def delete_payment_settings(
    id: int,
    current_user: UserResponse = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Delete a single payment_settings by ID (requires ownership)"""
    logger.debug(f"Deleting payment_settings with id: {id}")
    
    service = Payment_settingsService(db)
    try:
        success = await service.delete(id, user_id=str(current_user.id))
        if not success:
            logger.warning(f"Payment_settings with id {id} not found for deletion")
            raise HTTPException(status_code=404, detail="Payment_settings not found")
        
        logger.info(f"Payment_settings {id} deleted successfully")
        return {"message": "Payment_settings deleted successfully", "id": id}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting payment_settings {id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")