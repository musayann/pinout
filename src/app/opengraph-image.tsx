import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Electrical Plugs & Sockets in Rwanda: Types C, E, and G at 230V 50Hz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0A3F32 0%, #0B4F3E 50%, #1A6B52 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top branding */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#D4A017",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "20px",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Rwanda Plugs
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "56px",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Electrical Plugs &amp; Sockets in Rwanda
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#D4A017",
              borderRadius: "2px",
              margin: "8px 0",
            }}
          />

          {/* Plug type badges */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "8px",
            }}
          >
            {["C", "E", "G"].map((type) => (
              <div
                key={type}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "3px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  {type}
                </span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "24px",
              margin: "12px 0 0 0",
              letterSpacing: "0.05em",
            }}
          >
            Types C, E, and G · 230V / 50Hz
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
