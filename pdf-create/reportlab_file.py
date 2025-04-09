import re
import csv
import numpy as np
import random
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase.pdfmetrics import stringWidth
import copy

SQUARE_SIZE_CONST = 100
SQUARE_SIZE_FORMAT_CONST = 100

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
    # formatted_text = f'<font color=blue size={fontSize}> {text} </font>'
    # test_P = Paragraph(formatted_text, styles['Bingo-Square'])
    # w, h = test_P.wrap(100,100)
    # print("paragraph check", w, h, aW, aH)

    while height > aH or width > aW:
        fontSize -= 1
        leading -= 1 # do this if you're leading is based on the fontSize
        # formatted_text = f'<font color=blue size={fontSize}> {text} </font>'
        # print(formatted_text)
        # del test_P
        # test_P = Paragraph(formatted_text, styles['Bingo-Square'])
        # w, h = test_P.wrap(SQUARE_SIZE_CONST,SQUARE_SIZE_CONST)
        # print("paragraph check", w, h, aW, aH)
       # print("inside loop")
        lines = break_lines(text, aW)
        width, height = line_wrap(lines, style)
    
    return fontSize, leading

# in the future make this a custom file name based on title
doc = SimpleDocTemplate("output_pdfs/simple_table.pdf", pagesize=letter)
styles = getSampleStyleSheet()
story = []


#styles['Normal'].alignment = TA_CENTER
bingo_square_style = copy.deepcopy(styles['Normal'])
bingo_square_style.alignment = TA_CENTER
bingo_square_style.name = "Bingo-Square"
bingo_square_style.fontSize = 12
bingo_square_style.leading = 12

print(bingo_square_style.fontName)

styles.add(bingo_square_style)
print(styles.byName)



# open and parse data into an array
# later this will need to be more flexible w the data type 
bingo_phrases = []
with open("tests/input2.txt", "r") as file:
    for line in file:

        stripped_line = re.sub(r"\d+\.", "", line).strip()[:-1]
        new_font_size, new_leading = shrink_font_size(SQUARE_SIZE_FORMAT_CONST, SQUARE_SIZE_FORMAT_CONST, stripped_line, 'Helvetica', bingo_square_style.fontSize, bingo_square_style.leading, styles['Bingo-Square'])
        print(new_font_size, new_leading)
        formatted_text = f'<para leading={new_leading}> <font color=black size={new_font_size}> {stripped_line} </font> </para>'
        print(formatted_text)



       # test_P = Paragraph(formatted_text, styles['Bingo-Square'])
        # w, h = test_P.wrap(100,100)
        # print(w, h)
        # print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        # print(line)
        # width = stringWidth(max(line), styles['Bingo-Square'].fontName, styles['Bingo-Square'].fontSize)
        # line_split = simpleSplit(line, styles['Bingo-Square'].fontName, styles['Bingo-Square'].fontSize, 100)
        # height = styles['Bingo-Square'].leading * len(line_split)
        # print(line_split)
        # print(styles['Bingo-Square'].fontSize, styles['Bingo-Square'].leading )
        # print()
        # print("width: ", width, "height: ", height)
        # print()
        bingo_phrases.append(Paragraph(formatted_text, styles['Bingo-Square']))

while(len(bingo_phrases) > 25):
    to_remove = random.choice(bingo_phrases)
    #print(to_remove)
    bingo_phrases.remove(to_remove)


bingo_phrases[12] = 'FREE SPACE'    

#bingo square style

# convert to 5x5 array
arr = np.array(bingo_phrases)
arr_reshape = arr.reshape(5,5)
data = arr_reshape.tolist()

# formatting
tblstyle = TableStyle([ ('FONT', (0,0), (-1, -1), 'Helvetica', 12),
                       ('ALIGN', (0,0), (-1, -1), 'CENTER'),
                       ('VALIGN', (0,0), (-1, -1), 'MIDDLE'),
                       ('TEXTCOLOR', (1, 4), (1, 5), colors.blue),
                       ('FONT', (1, 4), (1,5), 'Helvetica', 10),
                        ('GRID', (0,0), (-1, -1), 1, colors.black), ])

# so i was approaching it with creating a class style...
#  I actually need to make sure that the paragraph does not exceed the size of the box. 
# if so, we need to decrease the font for that individual box

# to - do - find out if there is a way to check if the text for a box exceeds the size of the box

# dynamically change the font size if the current font selected would cause the text to exceed the size of the box

#in the future read in table name dynamically
# in the mean time, create a table name and then spacer

text = "Alyssa's Bingo"
#styles['Normal'].alignment = TA_CENTER
bingo_title = copy.deepcopy(styles['Title'])
bingo_title.alignment = TA_CENTER
bingo_title.name = "Bingo-Title"
bingo_title.fontSize = 30
bingo_title.leading = 30

styles.add(bingo_title)
para = Paragraph(text, style=styles["Bingo-Title"])
story.append(para)

spacer = Spacer(width=0, height=50)
story.append(spacer)


tbl = Table(data, colWidths=[SQUARE_SIZE_CONST for x in range(5)], rowHeights=[SQUARE_SIZE_CONST for x in range(len(data))])
tbl.setStyle(tblstyle)
story.append(tbl)

doc.build(story)


