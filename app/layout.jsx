import "../styles/globals.css";

export const metadata = {
  title: "S. C. Mead Communications | Structured Cabling & CCTV | Northern Nevada",
  description:
    "S. C. Mead Communications provides professional structured cabling, CCTV, and low voltage services across Northern Nevada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
