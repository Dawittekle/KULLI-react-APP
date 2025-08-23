-- Basic schema for an Uber-like backend (no PostGIS, using lat/lng floats).
-- Run inside Postgres to initialize tables: see README for commands.

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    role TEXT NOT NULL CHECK (role IN ('rider','driver','admin')),
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    phone TEXT UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS drivers (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    vehicle_make TEXT,
    vehicle_model TEXT,
    vehicle_plate TEXT UNIQUE,
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    status TEXT NOT NULL DEFAULT 'offline' CHECK (status IN ('offline','online','on_trip')),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS driver_locations (
    driver_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL,
    heading DOUBLE PRECISION,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_driver_locations_updated_at ON driver_locations(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_driver_locations_lat ON driver_locations(lat);
CREATE INDEX IF NOT EXISTS idx_driver_locations_lng ON driver_locations(lng);

CREATE TABLE IF NOT EXISTS rides (
    id UUID PRIMARY KEY,
    rider_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    driver_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status TEXT NOT NULL CHECK (status IN ('requested','driver_assigned','driver_arrived','in_progress','completed','cancelled','no_driver')),
    pickup_lat DOUBLE PRECISION NOT NULL,
    pickup_lng DOUBLE PRECISION NOT NULL,
    pickup_address TEXT,
    dropoff_lat DOUBLE PRECISION NOT NULL,
    dropoff_lng DOUBLE PRECISION NOT NULL,
    dropoff_address TEXT,
    distance_km_est DOUBLE PRECISION,
    fare_estimate_cents INTEGER,
    fare_actual_cents INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_rides_rider_id ON rides(rider_id);
CREATE INDEX IF NOT EXISTS idx_rides_driver_id ON rides(driver_id);
CREATE INDEX IF NOT EXISTS idx_rides_status ON rides(status);

CREATE TABLE IF NOT EXISTS ride_offers (
    id UUID PRIMARY KEY,
    ride_id UUID NOT NULL REFERENCES rides(id) ON DELETE CASCADE,
    driver_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status TEXT NOT NULL CHECK (status IN ('offered','accepted','rejected','expired')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_ride_offers_ride_id ON ride_offers(ride_id);
CREATE INDEX IF NOT EXISTS idx_ride_offers_driver_id ON ride_offers(driver_id);

CREATE TABLE IF NOT EXISTS refresh_tokens (
    token TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    revoked BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS ratings (
    id UUID PRIMARY KEY,
    ride_id UUID NOT NULL REFERENCES rides(id) ON DELETE CASCADE,
    rater_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    ratee_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Helper function: distance in km using Haversine formula
-- (good enough for MVP; for production consider PostGIS).
CREATE OR REPLACE FUNCTION distance_km(lat1 double precision, lng1 double precision, lat2 double precision, lng2 double precision)
RETURNS double precision AS $$
DECLARE
  r integer := 6371; -- Earth radius in km
  dlat double precision := radians(lat2-lat1);
  dlng double precision := radians(lng2-lng1);
  a double precision := sin(dlat/2)^2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlng/2)^2;
BEGIN
  RETURN 2 * r * atan2(sqrt(a), sqrt(1-a));
END;
$$ LANGUAGE plpgsql IMMUTABLE;
