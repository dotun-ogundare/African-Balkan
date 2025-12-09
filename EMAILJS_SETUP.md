# EmailJS Setup Instructions for African Balkan Institute Marketplace

## Overview

The marketplace uses EmailJS to automatically send order details to your email when customers place orders.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template configuration:

**Template Name:** `marketplace_order`

**Template Content:**

```
Subject: New Marketplace Order from {{customer_name}}

New Order Received!

Customer Information:
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Delivery Address: {{delivery_address}}
Additional Info: {{additional_info}}

Order Details:
{{order_items}}

Total Amount: ${{total_amount}}
Payment Method: {{payment_method}}
Order Date: {{order_date}}

---
This order was placed through the African Balkan Institute Marketplace.
```

4. **Copy the Template ID** - you'll need this later
5. Save the template

### 4. Get Your Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Find your **Public Key** (it looks like: `user_xxxxxxxxxxxxx` or just a string of characters)
3. **Copy the Public Key**

### 5. Update Your Application

Open the file: `src/pages/Marketplace.jsx`

Find these lines (around line 320):

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
)
```

Replace the placeholders with your actual values:

```javascript
await emailjs.send(
  'service_abc1234', // Your actual Service ID
  'template_xyz5678', // Your actual Template ID
  templateParams,
  'your_public_key_here' // Your actual Public Key
)
```

### 6. Test Your Setup

1. Save the changes to `Marketplace.jsx`
2. Go to your marketplace website
3. Add items to cart
4. Click "Proceed to Checkout"
5. Fill out the form and click "Place Order"
6. Check your email inbox for the order notification

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- No credit card required
- Sufficient for small to medium marketplace operations

## Troubleshooting

### Email not received?

1. Check your EmailJS dashboard for any error messages
2. Verify all IDs are correctly copied (no extra spaces)
3. Check your spam/junk folder
4. Ensure your email service is properly connected in EmailJS

### Console errors?

1. Open browser Developer Tools (F12)
2. Check the Console tab for error messages
3. Verify the Public Key is correct

### Need to change recipient email?

In EmailJS dashboard:

1. Go to "Email Services"
2. Edit your connected service
3. Update the email address settings

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

## Security Notes

- Never commit your EmailJS keys to public repositories
- Consider using environment variables for production deployments
- Monitor your EmailJS usage to avoid exceeding free tier limits
