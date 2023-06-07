import { Theme } from "next-auth"
import { createTransport } from "nodemailer"

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string; theme: Theme }) {
  const { url, host, theme } = params

  const escapedHost = host.replace(/\./g, "&#8203;.")

  const brandColor = theme.brandColor || "#1C30E3"
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || "#fff",
  }

  return `
    <body style="background: ${color.background};">
      <table width="100%" border="0" cellspacing="20" cellpadding="0"
        style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center" style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            <a 
            href="https://foodtron.app"
            target="_blank"
            rel="noopener noreferrer">
            <img height="50px" src="https://foodtron.app/comet-full.png" /></a>
          </td>
        </tr>
        <tr>
          <td align="center"
            style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            Para entrar no app clique abaixo
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                    target="_blank"
                    style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Entrar</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center"
            style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            Se você não esperava por este email pode ignorá-lo.
          </td>
        </tr>
      </table>
    </body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Entrar em ${host}\n${url}\n\n`
}

const sendVerificationRequest = async (params: any) => {
  const { identifier, url, provider, theme } = params
  const { host } = new URL(url)
  const transport = createTransport(provider.server)

  const result = await transport.sendMail({
    to: identifier,
    from: {
      name: "Foodtron",
      address: provider.from,
    },
    subject: `Entrar em ${host}`,
    text: text({ url, host }),
    html: html({ url, host, theme }),
  })

  const failed = result.rejected.concat(result.pending).filter(Boolean)

  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
  }
}

export default sendVerificationRequest
