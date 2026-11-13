import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// Social preview of an app page: icon, name, description and platforms on the left,
// the first screenshot (if any) on the right. Images arrive as PNG data URIs with their size.
export default async ({ title, description, platforms, icon, screenshot }) => {
  const shot = screenshot && fit(screenshot, 440, 470);

  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "70px 80px",
          position: "relative",
          fontFamily: "Wotfard",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-120px",
                right: "-120px",
                width: "640px",
                height: "640px",
                background: "linear-gradient(140deg, #6366f1, #a855f7)",
                filter: "blur(110px)",
                opacity: 0.4,
                borderRadius: "100%",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: shot ? "560px" : "100%",
                height: "100%",
              },
              children: [
                icon
                  ? { type: "img", props: { src: icon, width: 128, height: 128, style: { borderRadius: "28px" } } }
                  : { type: "div", props: { style: { height: "128px" } } },
                {
                  type: "div",
                  props: {
                    style: { display: "flex", flexDirection: "column" },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: { fontSize: 76, fontWeight: 900, lineHeight: 1.05, marginBottom: "20px" },
                          children: title,
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: { fontSize: 28, lineHeight: 1.35, color: "#cbd5e1" },
                          children: shorten(description, shot ? 120 : 200),
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { display: "flex", alignItems: "center", fontSize: 24, color: "#e2e8f0" },
                    children: [
                      ...platforms.map(name => ({
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            padding: "6px 18px",
                            marginRight: "12px",
                            borderRadius: "40px",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                          },
                          children: name,
                        },
                      })),
                      {
                        type: "div",
                        props: { style: { display: "flex", marginLeft: "auto", color: "#94a3b8" }, children: SITE.title },
                      },
                    ],
                  },
                },
              ],
            },
          },
          shot && {
            type: "div",
            props: {
              style: { display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-end" },
              children: {
                type: "img",
                props: {
                  src: screenshot.src,
                  width: shot.width,
                  height: shot.height,
                  style: { borderRadius: "18px", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)" },
                },
              },
            },
          },
        ].filter(Boolean),
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(),
    }
  );
};

function fit({ width, height }, maxWidth, maxHeight) {
  const scale = Math.min(maxWidth / width, maxHeight / height);
  return { width: Math.round(width * scale), height: Math.round(height * scale) };
}

// Satori has no reliable line clamp: cut at a word boundary, preferring the end of a sentence
function shorten(text, max) {
  if (text.length <= max) return text;
  const sentence = text.slice(0, max + 1).match(/^.*[.!?](?=\s)/)?.[0];
  if (sentence && sentence.length > max * 0.5) return sentence;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}
