import '@styles/globals.css';

export const metadata = {
  title: "Promptopia",
  description: "Descover and shar AI prompts",
}

export interface RootLayoutProps {
  children: any,
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <div className='main'>
        <div className='gradient'/>
      </div>
      
      <main className='app'>
        {children}
      </main>
    </html>
  )
}

export { RootLayout };
