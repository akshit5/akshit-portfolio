import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 9,
              background: "#111111",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#666666",
              display: "flex",
            }}
          >
            Akshit Rana · Germany
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -3,
              color: "#111111",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>From ambiguous problem</span>
            <span>
              to working product<span style={{ color: "#2F4BF0" }}>.</span>
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: "#666666",
              display: "flex",
            }}
          >
            Product · Strategy · AI · Design
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#666666",
            borderTop: "1px solid #E8E8E8",
            paddingTop: 24,
          }}
        >
          <span>Technology &amp; Innovation Management, M.Eng.</span>
          <span>akshitrana.com</span>
        </div>
      </div>
    ),
    size
  );
}
