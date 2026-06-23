import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, business_name, business_type, zip_code, employee_size, current_provider } = body

    const webhookUrl = process.env.DISCORD_BUSINESS_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    const message = {
      embeds: [{
        title: '🏢 New Business Internet Lead',
        color: 0x3B82F6,
        fields: [
          { name: 'Name', value: name || 'N/A', inline: true },
          { name: 'Business', value: business_name || 'N/A', inline: true },
          { name: 'Phone', value: phone || 'N/A', inline: true },
          { name: 'Email', value: email || 'N/A', inline: true },
          { name: 'Business Type', value: business_type || 'N/A', inline: true },
          { name: 'ZIP Code', value: zip_code || 'N/A', inline: true },
          { name: 'Employees', value: employee_size || 'N/A', inline: true },
          { name: 'Current Provider', value: current_provider || 'N/A', inline: true },
        ],
        timestamp: new Date().toISOString(),
      }]
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Discord webhook error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}