function Footer() {
  const d = new Date();
  let year = d.getFullYear();
    return (
      
      <footer className="Footer">
      <p>Copyright &copy; All rights reserved to Ari {year}</p>
    </footer>
    );
  }
  
  export default Footer;