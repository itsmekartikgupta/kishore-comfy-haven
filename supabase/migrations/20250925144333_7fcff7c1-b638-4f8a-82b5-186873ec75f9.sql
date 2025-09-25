-- Remove the overly permissive SELECT policy that allows any authenticated user to read all contact submissions
DROP POLICY "Authenticated users can read all submissions" ON public.contact_submissions;

-- The INSERT policy "Anyone can submit contact forms" remains unchanged as it's appropriate for a contact form
-- Now only users with service role access (administrators) can read contact submissions
-- This prevents customer data exposure to regular authenticated users