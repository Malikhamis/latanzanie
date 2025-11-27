// Script to check leads in Supabase
const { createClient } = require('@supabase/supabase-js')

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkLeads() {
  console.log('Checking leads in Supabase...')
  
  try {
    // Query the kilimanjaro_leads table
    const { data, error } = await supabase
      .from('kilimanjaro_leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)
    
    if (error) {
      console.error('Error fetching leads:', error)
      process.exit(1)
    }
    
    console.log(`Found ${data.length} leads:`)
    console.log(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error connecting to Supabase:', error)
    process.exit(1)
  }
}

checkLeads()