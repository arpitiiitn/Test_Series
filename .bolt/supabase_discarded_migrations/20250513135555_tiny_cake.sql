/*
  # Storage Setup for Test Results

  1. Storage Setup
    - Create storage schema
    - Create test-results bucket
    - Enable RLS on objects table
  
  2. Security Policies
    - Allow users to upload their own test results
    - Allow users to read their own test results
*/

-- Enable Storage by creating the storage schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS storage;

-- Create the storage.objects table if it doesn't exist
CREATE TABLE IF NOT EXISTS storage.objects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bucket_id text,
  name text,
  owner uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  last_accessed_at timestamptz DEFAULT now(),
  metadata jsonb,
  version text
);

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Safely create bucket and policies
DO $$
BEGIN
  -- Create the test-results bucket if it doesn't exist
  INSERT INTO storage.buckets (id, name)
  VALUES ('test-results', 'test-results')
  ON CONFLICT (id) DO NOTHING;

  -- Create upload policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND schemaname = 'storage'
    AND policyname = 'Users can upload their own test results'
  ) THEN
    CREATE POLICY "Users can upload their own test results"
    ON storage.objects
    FOR INSERT
    WITH CHECK (
      bucket_id = 'test-results' 
      AND auth.uid()::text = (storage.foldername(name))[1]
    );
  END IF;

  -- Create read policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND schemaname = 'storage'
    AND policyname = 'Users can read their own test results'
  ) THEN
    CREATE POLICY "Users can read their own test results"
    ON storage.objects
    FOR SELECT
    USING (
      bucket_id = 'test-results' 
      AND auth.uid()::text = (storage.foldername(name))[1]
    );
  END IF;
END $$;