export function AppFooter() {
  return (
    <footer className="flex justify-between items-center p-2 bg-card/50 text-xs">
      
     
      <div className="text-muted-foreground">
        © {new Date().getFullYear()} counter dapp. All rights reserved.
      </div>

    
      <div className="flex items-center space-x-1">
        developed by{' '}
        <a 
          href="https://x.com/mishaldotrwa" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:underline" 
        >
          mishaldotrwa
        </a>
      </div>
      
    </footer>
  )
}