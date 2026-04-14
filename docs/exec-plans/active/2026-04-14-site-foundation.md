# Site Foundation Plan

## Goal
Create a front door that explains DarkExpert with credibility and converts early interest.

## Next Steps
- Define the initial sitemap and hero structure.
- Deployment path chosen: Cloudflare DNS -> Traefik host router -> nginx loopback vhost -> repo `public_html`.
- Build a first-pass homepage inside `public_html` or the eventual app framework root.
- Add analytics and a contact or waitlist path once the core narrative is stable.
- Cross-link clearly to the runtime repo `tyc0on/darkexpert` without confusing the product site with the agent itself.
- Use the shared cutover workflow at [/srv/dark/docs/references/site-cutover-harness.md](/srv/dark/docs/references/site-cutover-harness.md) for future diagnosis and cutovers.
