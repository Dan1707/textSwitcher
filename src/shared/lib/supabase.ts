import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://atatnfkaemyajglcjnax.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0YXRuZmthZW15YWpnbGNqbmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjkxNjYsImV4cCI6MjA1ODg0NTE2Nn0.3VtMEhqfATsehNue6_Xw18IFcL1pX1jAlPdqvNNNAuo'
)
