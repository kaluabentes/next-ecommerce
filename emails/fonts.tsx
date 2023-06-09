import { Font } from "@react-email/components"

export default function Fonts() {
  return (
    <>
      <Font
        fontFamily="Poppins"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2",
          format: "woff2",
        }}
        fontWeight={500}
        fontStyle="medium"
      />
      <Font
        fontFamily="Poppins"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2",
          format: "woff2",
        }}
        fontWeight={600}
        fontStyle="semibold"
      />
      <Font
        fontFamily="Poppins"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={700}
        fontStyle="bold"
      />
    </>
  )
}
