// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Outlook for cradlerunafrica@outlook.com)
// 3. Create an email template with the following template variables:
//    - {{driver_name}}, {{driver_email}}, {{driver_phone}}
//    - {{codriver_name}}, {{codriver_email}}, {{codriver_phone}}
//    - {{emergency_contact_name}}, {{emergency_contact_phone}}
//    - {{license_number}}, {{license_expiry}}, {{driving_experience}}
//    - {{vehicle_make}}, {{vehicle_model}}, {{vehicle_year}}, {{engine_capacity}}
//    - {{driver_dietary}}, {{codriver_dietary}}, {{allergies}}, {{medical_conditions}}, {{special_accommodations}}
//    - {{driver_jacket_size}}, {{codriver_jacket_size}}, {{driver_shirt_size}}, {{codriver_shirt_size}}
//    - {{instagram_handle}}, {{twitter_handle}}
//    - {{to_email}}, {{from_email}}
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_xia7bco', // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_rt3rycy', // Replace with your EmailJS template ID
    PUBLIC_KEY: 'fNiP2QfImCAJSvQ1V', // Replace with your EmailJS public key
    TO_EMAIL: 'roynthiga9@gmail.com',
    FROM_EMAIL: 'cradlerunafrica@outlook.com',
};

// Email Template Example:
/*
Subject: New Cradle Run Registration - {{driver_name}}

PERSONAL IDENTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Driver: {{driver_name}}
Email: {{driver_email}}
Phone: {{driver_phone}}

Co-Driver: {{codriver_name}}
Email: {{codriver_email}}
Phone: {{codriver_phone}}

Emergency Contact: {{emergency_contact_name}}
Phone: {{emergency_contact_phone}}

DRIVER QUALIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
License Number: {{license_number}}
License Expiry: {{license_expiry}}
Driving Experience:
{{driving_experience}}

VEHICLE DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Make: {{vehicle_make}}
Model: {{vehicle_model}}
Year: {{vehicle_year}}
Engine Capacity: {{engine_capacity}} HP

HOSPITALITY & HEALTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Driver Dietary Requirements: {{driver_dietary}}
Co-Driver Dietary Requirements: {{codriver_dietary}}
Allergies: {{allergies}}
Medical Conditions: {{medical_conditions}}
Special Accommodations: {{special_accommodations}}

BRANDING & PERSONALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Driver Jacket Size: {{driver_jacket_size}}
Co-Driver Jacket Size: {{codriver_jacket_size}}
Driver Shirt Size: {{driver_shirt_size}}
Co-Driver Shirt Size: {{codriver_shirt_size}}

Social Media:
Instagram: {{instagram_handle}}
Twitter: {{twitter_handle}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This registration was submitted via the Cradle Run website.
Please review the attached documents for ID verification, vehicle documentation, and photos.
*/
