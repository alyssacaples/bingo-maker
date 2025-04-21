from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

galaxy = HTML('galaxy.html') 
font_config = FontConfiguration()
css = CSS('galaxy.css', font_config=font_config)
galaxy.write_pdf("galaxy_output.pdf", stylesheets = [css], font_config=font_config)

# 

