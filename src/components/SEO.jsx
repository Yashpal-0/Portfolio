import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Yashpal Yadav - Frontend Engineer & Full-Stack Developer | IIIT Hyderabad",
  description = "Experienced Frontend Engineer & Full-Stack Developer specializing in React, Flutter, and Node.js. B.Tech + MS (Research) in CSE at IIIT Hyderabad. Building innovative web applications and educational platforms.",
  keywords = "Yashpal Yadav, Frontend Engineer, Full-Stack Developer, React Developer, Flutter Developer, Node.js, IIIT Hyderabad, Portfolio, Web Developer, Software Engineer, JavaScript, TypeScript, MongoDB, Express.js, Educational Technology, OS4all",
  image = "https://yashpal-yadav.vercel.app/og-image.jpg",
  url = "https://yashpal-yadav.vercel.app",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Yashpal Yadav Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yashpal_yadav" />
      <meta name="twitter:site" content="@yashpal_yadav" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      <meta name="application-name" content="Yashpal Yadav Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Yashpal Yadav" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  )
}

export default SEO
