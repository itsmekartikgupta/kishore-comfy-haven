-- Add restrictive SELECT policy to contact_submissions table
-- This prevents public access to sensitive customer data while maintaining INSERT functionality

CREATE POLICY "Only service role can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Optional: Create a policy for authenticated admin users if needed later
-- This is commented out but can be enabled if admin access is required
-- CREATE POLICY "Authenticated admins can view contact submissions" 
-- ON public.contact_submissions 
-- FOR SELECT 
-- USING (auth.jwt() ->> 'role' = 'service_role');