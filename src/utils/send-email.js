import emailjs from '@emailjs/browser';

export async function SendEmail(options) {
  try {
    emailjs.init({
      publicKey: 'YOUR_PUBLIC_KEY',
      blockHeadless: true,
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
      },
      limitRate: {
        throttle: 10000, // 10s
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: options.email,
      subject: options.subject,
      html: `
	  
		  <html>
	  <head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="x-apple-disable-message-reformatting" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="color-scheme" content="light dark" />
		<meta name="supported-color-schemes" content="light dark" />
		<title>${options.subject}</title>
		<style type="text/css" rel="stylesheet" media="all">
		  /* Base ------------------------------ */
	  
		  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
		  body {
			width: 100% !important;
			height: 100%;
			margin: 0;
			-webkit-text-size-adjust: none;
		  }
	  
		  a {
			color: #3869D4;
		  }
	  
		  a img {
			border: none;
		  }
	  
		  td {
			word-break: break-word;
		  }
	  
		  .preheader {
			display: none !important;
			visibility: hidden;
			mso-hide: all;
			font-size: 1px;
			line-height: 1px;
			max-height: 0;
			max-width: 0;
			opacity: 0;
			overflow: hidden;
		  }
		  /* Type ------------------------------ */
	  
		  body,
		  td,
		  th {
			font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
		  }
	  
		  h1 {
			margin-top: 0;
			color: #333333;
			font-size: 22px;
			font-weight: bold;
			text-align: left;
		  }
	  
		  h2 {
			margin-top: 0;
			color: #333333;
			font-size: 16px;
			font-weight: bold;
			text-align: left;
		  }
	  
		  h3 {
			margin-top: 0;
			color: #333333;
			font-size: 14px;
			font-weight: bold;
			text-align: left;
		  }
	  
		  td,
		  th {
			font-size: 16px;
		  }
	  
		  p,
		  ul,
		  ol,
		  blockquote {
			margin: .4em 0 1.1875em;
			font-size: 16px;
			line-height: 1.625;
		  }
	  
		  p.sub {
			font-size: 13px;
		  }
		  /* Utilities ------------------------------ */
	  
		  .align-right {
			text-align: right;
		  }
	  
		  .align-left {
			text-align: left;
		  }
	  
		  .align-center {
			text-align: center;
		  }
	  
		  .u-margin-bottom-none {
			margin-bottom: 0;
		  }
		  /* Buttons ------------------------------ */
	  
		  .button {
			display: inline-block;
			color: #FFF;
			text-decoration: none;
			border-radius: 3px;
			box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
			-webkit-text-size-adjust: none;
			box-sizing: border-box;
		  }
	  
		  .button--green {
			background-color: #93c47d;
			border-top: 10px solid #93c47d;
			border-right: 18px solid #93c47d;
			border-bottom: 10px solid #93c47d;
			border-left: 18px solid #93c47d;
		  }
	  
	  
	  
		  @media only screen and (max-width: 500px) {
			.button {
			  width: 100% !important;
			  text-align: center !important;
			  font-size: 2em;
			  color: white !important;
			}
		  }
		  /* Attribute list ------------------------------ */
	  
		  .attributes {
			margin: 0 0 21px;
		  }
	  
		  .attributes_content {
			background-color: #F4F4F7;
			padding: 16px;
		  }
	  
		  .attributes_item {
			padding: 0;
		  }
		  /* Body content ------------------------------ */
	  
		  .content-cell {
			padding: 45px;
		  }
		  .colorblack {
			color: black;
		  }
		  /*Media Queries ------------------------------ */
	  
		  @media only screen and (max-width: 600px) {
			.email-body_inner,
			.email-footer {
			  width: 100% !important;
			}
		  }
	  
		  @media (prefers-color-scheme: dark) {
			body,
			.email-body,
			.email-body_inner,
			.email-content,
			.email-wrapper,
			.email-masthead,
			.email-footer {
			  background-color: #333333 !important;
			  color: #FFF !important;
			}
	  
			p,
			ul,
			ol,
			blockquote,
			h1,
			h2,
			h3,
			span,
			.purchase_item {
			  color:black ;
			}
	  
			.attributes_content,
			.discount {
			  background-color: #222 !important;
			}
	  
			.email-masthead_name {
			  text-shadow: none !important;
			}
		  }
	  
		  :root {
			color-scheme: light dark;
			supported-color-schemes: light dark;
		  }
		</style>
		<!--[if mso]>
			<style type="text/css">
			  .  {
				font-family: Arial, sans-serif;
				color:black;
			  }
			</style>
		  <![endif]-->
		  </head>
		  <body>
			<table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
			  <!-- Email Body -->
			  <tr>
				<td align="center">
				  <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
					<!-- Body content -->
					<tr>
					  <td class="email-body" width="570" cellpadding="0" cellspacing="0">
						<table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
						  <!-- Inner content -->
						  <tr>
							<td class="content-cell">
							  <div>
							  <h1>${options.subject}</h1>
								${options.details}
								<p>We wish you good health 🤩</p>
								<p>Thanks,<br>The Kunafatea Team</p>
							  </div>
							</td>
						  </tr>
						</table>
					  </td>
					</tr>
					<!-- Footer -->
					<tr>
					  <td>
						<table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
						  <tr>
							<td class="content-cell" align="center">
							  <a href="https://Kunafatea/"> Kunafatea</a>
							</td>
						  </tr>
						</table>
					  </td>
					</tr>
				  </table>
				</td>
			  </tr>
			</table>
		  </body>
		  </html>
	  `,
    };
    await emailjs.send(
      'service_fhhwg7b',
      'template_bpns2qj',
      {
        form_type: 'Event',
        message: mailOptions,
      },
      {
        publicKey: 'hFoPaUo5UPj1WAnYG',
      }
    );
  } catch (e) {
    console.log(e);
  }
}
