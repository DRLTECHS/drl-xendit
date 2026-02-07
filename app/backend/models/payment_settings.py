from core.database import Base
from sqlalchemy import Boolean, Column, DateTime, Integer, String


class Payment_settings(Base):
    __tablename__ = "payment_settings"
    __table_args__ = {"extend_existing": True}

    id = Column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    user_id = Column(String, nullable=False)
    provider = Column(String, nullable=False)
    public_key = Column(String, nullable=True)
    secret_key = Column(String, nullable=True)
    is_active = Column(Boolean, nullable=True)
    environment = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=True)
    updated_at = Column(DateTime(timezone=True), nullable=True)