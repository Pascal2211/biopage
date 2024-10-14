// app/layout.js
import './globals.css'; // Import global styles

export const metadata = {
  title: 'Pascal Sibondagara',
  description: 'Welcome to my website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}