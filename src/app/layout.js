'use client'
import StyledComponentsRegistry from './lib/registry';
import Navbar from './components/Navbar/Navbar';



export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <Navbar/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
