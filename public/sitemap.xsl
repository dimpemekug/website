<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="it">
      <head>
        <title>XML Sitemap | dimpemekug.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          :root {
            --bg: #090d16;
            --surface: #101726;
            --border: rgba(255, 255, 255, 0.08);
            --text: #f1f5f9;
            --text-muted: #94a3b8;
            --accent: #38bdf8;
            --accent-bg: rgba(56, 189, 248, 0.12);
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg: #f8fafc;
              --surface: #ffffff;
              --border: rgba(0, 0, 0, 0.08);
              --text: #0f172a;
              --text-muted: #64748b;
              --accent: #0284c7;
              --accent-bg: rgba(2, 132, 199, 0.08);
            }
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 2.5rem 1.25rem;
            line-height: 1.5;
          }
          .container {
            max-width: 1120px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
          }
          h1 {
            font-size: 1.85rem;
            margin: 0 0 0.4rem 0;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          p.desc {
            color: var(--text-muted);
            margin: 0;
            font-size: 0.95rem;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            background: var(--accent-bg);
            color: var(--accent);
            padding: 0.35rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.825rem;
            font-weight: 600;
            margin-top: 1rem;
            border: 1px solid rgba(56, 189, 248, 0.25);
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 0.875rem;
            overflow: hidden;
            font-size: 0.875rem;
          }
          th {
            background: var(--accent-bg);
            color: var(--text);
            text-align: left;
            padding: 0.85rem 1rem;
            font-weight: 600;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: rgba(255, 255, 255, 0.02);
          }
          a {
            color: var(--accent);
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .tag {
            display: inline-block;
            padding: 0.2rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--text-muted);
            margin-right: 0.35rem;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
          }
          .tag-lang {
            font-weight: 700;
            color: var(--accent);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap</h1>
            <p class="desc">Mappa del sito XML generata per i motori di ricerca (Google, Bing). Conforme agli standard di sitemaps.org.</p>
            <div class="badge">
              <xsl:choose>
                <xsl:when test="sitemap:sitemapindex">
                  <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemap(s) nell'indice
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URL(s) indicizzati
                </xsl:otherwise>
              </xsl:choose>
            </div>
          </header>

          <xsl:choose>
            <!-- Sitemap Index template -->
            <xsl:when test="sitemap:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th style="width: 70%;">Sitemap URL</th>
                    <th>Ultima Modifica</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:lastmod"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>

            <!-- URL Set template -->
            <xsl:otherwise>
              <table>
                <thead>
                  <tr>
                    <th style="width: 55%;">URL Pagina</th>
                    <th>Versioni Alternate (hreflang)</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:for-each select="xhtml:link">
                          <span class="tag">
                            <span class="tag-lang"><xsl:value-of select="@hreflang"/></span>: <xsl:value-of select="@href"/>
                          </span>
                        </xsl:for-each>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
