import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import DynamicFavicon from "../favicon/DynamicFavicon";

const SEO = ({
  title,
  description,
  keywords,
  image,
  businessName,
  configData,
}) => {
  const router = useRouter();
  const { asPath } = router;

  const siteName = businessName || "SorBan Naga";
  const siteUrl = "https://meta.sorbannaga.com";
  const url = `${siteUrl}${asPath}`;
  const imageUrl = image || "https://meta.sorbannaga.com/logo-og.jpg";
  const desc =
    description ||
    "SorBan Naga adalah platform belanja online untuk UMKM, makanan lokal, produk tradisional, dan kebutuhan harian. Kirim cepat, aman, dan hemat. Dukung ekonomi lokal sekarang!";
  const pageTitle =
    title || "SorBan Naga - Belanja Tradisional Modern & UMKM";

  return (
    <>
      <DynamicFavicon configData={configData} />
      <Head>
        {/* General meta tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={url} />

        {/* Google specific */}
        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={desc} />
        <meta itemProp="image" content={imageUrl} />

        {/* Structured Data */}
        <script
          key="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: imageUrl,
              sameAs: [
                "https://facebook.com/61575978287707",
                "https://instagram.com/sorbannaga",
                "https://www.tiktok.com/@sorban.naga",
                "https://www.youtube.com/@sorbannaga",
              ],
            }),
          }}
        />
      </Head>
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  businessName: PropTypes.string,
  configData: PropTypes.object,
};

export default SEO;
