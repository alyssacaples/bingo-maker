from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase.pdfmetrics import stringWidth
import re

SQUARE_SIZE_CONST = 100
SQUARE_SIZE_FORMAT_CONST = 100

styles = getSampleStyleSheet()

def set_title(title_name):

    return None

def get_title():
    pass
   # return title

# def parse_input_text():
#     # this funciton will be the main parser of the text
#     pass
    
def change_table_size(selected_size):
    # this function will change the size of the bingo table
    pass

def toggle_free_space():
    # if the toggle free space is selected
    pass

def create_bingo_table():
    # it might be best to create a bingo class, 
    # have each function set the individual attributes of
    #  the bingo instance, and then create
    pass

def change_paper_size():
    # possibly provide option to change paper size
    pass

# HELPER FUNCTIONS
def shrink_font_size(aW, aH, text, fontName, fontSize, leading, style):
    """Shrinks font size by using pdfmetrics to calculate the height
    of a paragraph, given the font name, size, and available width."""
    def break_lines(text, aW):
        # simpleSplit calculates how reportlab will break up the lines for
        # display in a paragraph, by using width/fontsize.
        return simpleSplit(text, fontName, fontSize, aW)

    def line_wrap(lines, style):
        # Get overall width of text by getting stringWidth of longest line
        width = stringWidth(max(lines), style.fontName, style.fontSize)
        # Paragraph height can be calculated via line spacing and number of lines.
        height = leading * len(lines)
        return width, height

    lines = break_lines(text, aW)
    width, height = line_wrap(lines, style)
    while height > aH or width > aW:
        fontSize -= 1
        leading -= 1 # do this if you're leading is based on the fontSize
        lines = break_lines(text, aW)
        width, height = line_wrap(lines, style)
    
    return fontSize, leading

def generate_random_pdf_name():
    # use a time library to output time and date
    # output title, otherwise use default title
    pass 

def parse_text_file(text_file):
    bingo_phrases = []
    with open("tests/input2.txt", "r") as file:
        for line in file:

            stripped_line = re.sub(r"\d+\.", "", line).strip()[:-1]
            new_font_size, new_leading = shrink_font_size(SQUARE_SIZE_FORMAT_CONST, SQUARE_SIZE_FORMAT_CONST, stripped_line, 'Helvetica', bingo_square_style.fontSize, bingo_square_style.leading, styles['Bingo-Square'])
            formatted_text = f'<para leading={new_leading}> <font color=black size={new_font_size}> {stripped_line} </font> </para>'
            bingo_phrases.append(Paragraph(formatted_text, styles['Bingo-Square']))