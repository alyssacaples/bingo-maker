from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

galaxy = HTML('galaxy.html') 
font_config = FontConfiguration()
css = CSS('galaxy.css')
galaxy.write_pdf("galaxy_output.pdf", stylesheets = [css])

# background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg/2560px-Hubble2005-01-barred-spiral-galaxy-NGC1300.jpg");

