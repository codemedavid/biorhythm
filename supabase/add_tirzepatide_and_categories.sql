-- ============================================
-- PEPTIDE PULSE - TIRZEPATIDE PRODUCT & CATEGORIES SQL
-- Run this in your Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. CATEGORIES SETUP
-- ============================================

-- Create categories table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT,
    sort_order INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Disable RLS for easy access
ALTER TABLE public.categories DISABLE ROW LEVEL SECURITY;
GRANT ALL ON TABLE public.categories TO anon, authenticated, service_role;

-- Insert/Update Peptide Categories
INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
('c0a80121-0001-4e78-94f8-585d77059001', 'Peptides', 1, 'FlaskConical', true),
('c0a80121-0002-4e78-94f8-585d77059002', 'Weight Management', 2, 'Scale', true),
('c0a80121-0003-4e78-94f8-585d77059003', 'Beauty & Anti-Aging', 3, 'Sparkles', true),
('c0a80121-0004-4e78-94f8-585d77059004', 'Wellness & Vitality', 4, 'Heart', true),
('c0a80121-0005-4e78-94f8-585d77059005', 'GLP-1 Agonists', 5, 'Pill', true),
('c0a80121-0006-4e78-94f8-585d77059006', 'Insulin Pens', 6, 'Syringe', true),
('c0a80121-0007-4e78-94f8-585d77059007', 'Accessories', 7, 'Package', true),
('c0a80121-0008-4e78-94f8-585d77059008', 'Bundles & Kits', 8, 'Gift', true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    sort_order = EXCLUDED.sort_order,
    icon = EXCLUDED.icon,
    active = EXCLUDED.active,
    updated_at = NOW();

-- ============================================
-- 2. TIRZEPATIDE PRODUCTS
-- ============================================

-- Create products table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'Uncategorized',
    base_price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    discount_price DECIMAL(10, 2),
    discount_start_date TIMESTAMP WITH TIME ZONE,
    discount_end_date TIMESTAMP WITH TIME ZONE,
    discount_active BOOLEAN DEFAULT false,
    purity_percentage DECIMAL(5, 2) DEFAULT 99.0,
    molecular_weight TEXT,
    cas_number TEXT,
    sequence TEXT,
    storage_conditions TEXT DEFAULT 'Store at -20°C',
    inclusions TEXT[],
    stock_quantity INTEGER DEFAULT 0,
    available BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    image_url TEXT,
    safety_sheet_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create product variations table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.product_variations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    quantity_mg DECIMAL(10, 2) NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    stock_quantity INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Disable RLS
ALTER TABLE public.products DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variations DISABLE ROW LEVEL SECURITY;
GRANT ALL ON TABLE public.products TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.product_variations TO anon, authenticated, service_role;

-- Insert Tirzepatide Products (Multiple Dosages) - Fixed UUIDs
INSERT INTO public.products (id, name, description, base_price, category, image_url, featured, available, stock_quantity, purity_percentage, molecular_weight, cas_number, storage_conditions, inclusions) VALUES
-- Tirzepatide 5mg
('a1a20001-0001-4e78-94f8-585d77059001', 
 'Tirzepatide 5mg', 
 'Tirzepatide is a novel GIP and GLP-1 receptor agonist. This dual-action peptide has shown remarkable efficacy in clinical trials for weight management and metabolic health. Laboratory tested for 99%+ purity.',
 1800.00, 
 'c0a80121-0002-4e78-94f8-585d77059002', -- Weight Management category
 NULL, 
 true, 
 true, 
 50,
 99.5,
 '4813.45 g/mol',
 '2023788-19-2',
 'Store at -20°C. Protect from light.',
 ARRAY['1x 5mg Tirzepatide Vial', 'Certificate of Analysis', 'Storage Guidelines']
),

-- Tirzepatide 10mg
('a1a20002-0002-4e78-94f8-585d77059002', 
 'Tirzepatide 10mg', 
 'Double-strength Tirzepatide formulation. GIP/GLP-1 dual receptor agonist for enhanced metabolic support. Ideal for progressive protocols. Lab tested 99%+ purity.',
 3200.00, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 NULL, 
 true, 
 true, 
 50,
 99.5,
 '4813.45 g/mol',
 '2023788-19-2',
 'Store at -20°C. Protect from light.',
 ARRAY['1x 10mg Tirzepatide Vial', 'Certificate of Analysis', 'Storage Guidelines']
),

-- Tirzepatide 15mg
('a1a20003-0003-4e78-94f8-585d77059003', 
 'Tirzepatide 15mg', 
 'High-potency Tirzepatide formulation for advanced users. Premium GIP/GLP-1 dual agonist. Maximum strength for optimal results. Lab tested 99%+ purity.',
 4500.00, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 NULL, 
 true, 
 true, 
 50,
 99.5,
 '4813.45 g/mol',
 '2023788-19-2',
 'Store at -20°C. Protect from light.',
 ARRAY['1x 15mg Tirzepatide Vial', 'Certificate of Analysis', 'Storage Guidelines']
),

-- Tirzepatide 30mg (Premium)
('a1a20004-0004-4e78-94f8-585d77059004', 
 'Tirzepatide 30mg', 
 'Premium maximum-strength Tirzepatide. Our highest concentration formulation for experienced users. Exceptional value for extended protocols. Lab tested 99%+ purity.',
 7500.00, 
 'c0a80121-0002-4e78-94f8-585d77059002',
 NULL, 
 true, 
 true, 
 30,
 99.5,
 '4813.45 g/mol',
 '2023788-19-2',
 'Store at -20°C. Protect from light.',
 ARRAY['1x 30mg Tirzepatide Vial', 'Certificate of Analysis', 'Storage Guidelines', 'Reconstitution Water']
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    base_price = EXCLUDED.base_price,
    category = EXCLUDED.category,
    featured = EXCLUDED.featured,
    available = EXCLUDED.available,
    stock_quantity = EXCLUDED.stock_quantity,
    purity_percentage = EXCLUDED.purity_percentage,
    molecular_weight = EXCLUDED.molecular_weight,
    cas_number = EXCLUDED.cas_number,
    storage_conditions = EXCLUDED.storage_conditions,
    inclusions = EXCLUDED.inclusions,
    updated_at = NOW();

-- Insert Product Variations (Vials Only vs Complete Set)
INSERT INTO public.product_variations (product_id, name, price, stock_quantity) VALUES
-- Tirzepatide 5mg variations
('a1a20001-0001-4e78-94f8-585d77059001', 'Vials Only', 1800.00, 50),
('a1a20001-0001-4e78-94f8-585d77059001', 'Complete Set', 2300.00, 30),

-- Tirzepatide 10mg variations
('a1a20002-0002-4e78-94f8-585d77059002', 'Vials Only', 3200.00, 50),
('a1a20002-0002-4e78-94f8-585d77059002', 'Complete Set', 3700.00, 30),

-- Tirzepatide 15mg variations
('a1a20003-0003-4e78-94f8-585d77059003', 'Vials Only', 4500.00, 50),
('a1a20003-0003-4e78-94f8-585d77059003', 'Complete Set', 5000.00, 30),

-- Tirzepatide 30mg variations
('a1a20004-0004-4e78-94f8-585d77059004', 'Vials Only', 7500.00, 30),
('a1a20004-0004-4e78-94f8-585d77059004', 'Complete Set', 8200.00, 20)
ON CONFLICT DO NOTHING;

-- ============================================
-- 3. VIEW INSERTED DATA
-- ============================================

-- Check categories
SELECT id, name, sort_order, icon, active FROM public.categories ORDER BY sort_order;

-- Check Tirzepatide products
SELECT id, name, base_price, category, featured, stock_quantity FROM public.products WHERE name LIKE 'Tirzepatide%';

-- Check variations
SELECT pv.name as variation, pv.price, p.name as product 
FROM public.product_variations pv 
JOIN public.products p ON p.id = pv.product_id 
WHERE p.name LIKE 'Tirzepatide%'
ORDER BY p.name, pv.price;
