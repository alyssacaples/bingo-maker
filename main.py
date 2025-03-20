import re
import csv
import numpy as np
import random
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph
from reportlab.lib.enums import TA_CENTER
import copy

doc = SimpleDocTemplate("simple_table.pdf", pagesize=letter)
styles = getSampleStyleSheet()
story = []


#styles['Normal'].alignment = TA_CENTER
bingo_square_style = copy.deepcopy(styles['Normal'])
bingo_square_style.alignment = TA_CENTER
bingo_square_style.name = "Bingo-Square"
bingo_square_style.fontSize = 20
bingo_square_style.leading = 20
styles.add(bingo_square_style)
print(styles.byName)


# open and parse data into an array
# later this will need to be more flexible w the data type 
bingo_phrases = []
with open("input2.txt", "r") as file:
    for line in file:
        bingo_phrases.append(Paragraph(re.sub(r"\d+\.", "", line).strip()[:-1], styles['Bingo-Square']))

#print(bingo_phrases) # prints out 30
print(len(bingo_phrases))

for i in range(5):
    to_remove = random.choice(bingo_phrases)
    #print(to_remove)
    bingo_phrases.remove(to_remove)

#bingo square style

#print(bingo_phrases)
print(len(bingo_phrases))

# convert to 5x5 array
arr = np.array(bingo_phrases)
arr_reshape = arr.reshape(5,5)
data = arr_reshape.tolist()

# formatting
tblstyle = TableStyle([ ('FONT', (0,0), (-1, -1), 'Helvetica', 12),
                       ('ALIGN', (0,0), (-1, -1), 'CENTER'),
                       ('VALIGN', (0,0), (-1, -1), 'MIDDLE'),
                        ('GRID', (0,0), (-1, -1), 0.5, colors.black), ])

# so i was approaching it with creating a class style...
#  I actually need to make sure that the paragraph does not exceed the size of the box. 
# if so, we need to decrease the font for that individual box

# to - do - find out if there is a way to check if the text for a box exceeds the size of the box


tbl = Table(data, colWidths=[100 for x in range(5)], rowHeights=[100 for x in range(len(data))])
tbl.setStyle(tblstyle)
story.append(tbl)

doc.build(story)


