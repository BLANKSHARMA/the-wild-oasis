import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bwvmonwjjgxqusypwpul.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3dm1vbndqamd4cXVzeXB3cHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4OTEwOTMsImV4cCI6MjAxMzQ2NzA5M30.0RbxLnifqvacBoFrVrAk7zwruFP5Zw3AwjSnaUQ9CKo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
