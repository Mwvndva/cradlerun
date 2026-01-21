import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = "CRADLE RUN 2026 Purple Mile – End GBV Kenya Road Trip",
    description = "Join CRADLE RUN 2026 – SEASON 1: PURPLE MILE. A 7-day, 3,000 km Kenyan road trip rallying against Gender-Based Violence.",
    name = "CRADLE RUN",
    type = "website",
    image = "/og-image.jpg", // We should ensure this image exists or use a remote URL
    url = "https://cradlerun.com"
}: SEOProps) => {

    const fullTitle = title === "CRADLE RUN 2026 Purple Mile – End GBV Kenya Road Trip"
        ? title
        : `${title} | CRADLE RUN 2026`;

    // JSON-LD for the Event
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "CRADLE RUN 2026: Purple Mile",
        "startDate": "2026-06-01", // Example date, should be dynamic if possible
        "endDate": "2026-06-07",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": "Kenya",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE"
            }
        },
        "image": [
            url + image
        ],
        "description": description,
        "offers": {
            "@type": "Offer",
            "url": url,
            "price": "30000",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
        },
        "organizer": {
            "@type": "Organization",
            "name": "CRADLE RUN",
            "url": url
        }
    };

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
