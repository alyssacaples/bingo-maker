from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase.pdfmetrics import stringWidth
import re
import copy
import numpy as np
import random

SQUARE_SIZE_CONST = 100
SQUARE_SIZE_FORMAT_CONST = 100

styles = getSampleStyleSheet()

class BingoCard:
    # instance specific variables need to have the "self."" 
    # in order to be instance specific instead of globally common
    def __init__(self):
        self.randomize = False
        self.free_space = True
        self.copies = 1
        self.size = 25
        self.title = Paragraph("BINGO", style=styles["Bingo-Title"])
        self.bingo_phrases = []
        self.middle = 12
        self.bingo_array = None
        self.styles = getSampleStyleSheet()

    def set_title(self, title_name):
        self.title = title_name

    def get_title(self):
        return self.title

    # def parse_input_text():
    #     # this funciton will be the main parser of the text
    #     pass
    
    def change_table_size(self, selected_size=None):
        #if the number of phrases are too little, create duplicates
        # need to determine middle

        # this function will change the size of the bingo table
        if selected_size == "3x3":
            self.size = 9
            self.middle = 4
        elif selected_size == "4x4":
            self.size = 16
            self.middle = 8
        else:
            self.size = 25
            self.middle = 12

    def toggle_free_space(self):
        # if the toggle free space is selected
        self.free_space = not self.free_space

    def get_free_space(self):
        return self.free_space

    # def change_paper_size():
    #     # possibly provide option to change paper size
    #     pass

    def set_bingo_shape(self):
        # set new size
        # for now just keep at 25
        # convert to 5x5 array
        while(len(self.bingo_phrases) > 25):
            to_remove = random.choice(self.bingo_phrases)
            #print(to_remove)
            self.bingo_phrases.remove(to_remove)
        arr = np.array(self.bingo_phrases)
        arr_reshape = arr.reshape(5,5)
        self.bingo_array = arr_reshape.tolist()
        return None
    
    def creating_default_style(self):
        bingo_square_style = copy.deepcopy(styles['Normal'])
        bingo_square_style.alignment = TA_CENTER
        bingo_square_style.name = "Bingo-Square"
        bingo_square_style.fontSize = 12
        bingo_square_style.leading = 12

        self.styles.add(bingo_square_style)
    
    def creating_title_style(self):
        bingo_title = copy.deepcopy(styles['Title'])
        bingo_title.alignment = TA_CENTER
        bingo_title.name = "Bingo-Title"
        bingo_title.fontSize = 30
        bingo_title.leading = 30

        self.styles.add(bingo_title)


    def generate_pdf(self):
        doc = SimpleDocTemplate("output_pdfs/bingo_driver_test.pdf", pagesize=letter)
        story = []
        self.creating_default_style()
        self.creating_title_style()

        self.bingo_boxes = BingoCard.parse_text_file()

        # set free space
        if(self.get_free_space()):
            self.bingo_phrases[self.middle] = 'FREE SPACE'

        
        self.set_bingo_shape()
        story.append(self.title)
        story.append(Spacer(width=0, height=50))

        self.set_bingo_shape()

        tbl = Table(self.bingo_boxes, colWidths=[SQUARE_SIZE_CONST for x in range(5)], rowHeights=[SQUARE_SIZE_CONST for x in range(len(data))])
        # formatting
        tblstyle = TableStyle([ ('FONT', (0,0), (-1, -1), 'Helvetica', 12),
                            ('ALIGN', (0,0), (-1, -1), 'CENTER'),
                            ('VALIGN', (0,0), (-1, -1), 'MIDDLE'),
                            ('TEXTCOLOR', (1, 4), (1, 5), colors.blue),
                            ('FONT', (1, 4), (1,5), 'Helvetica', 10),
                                ('GRID', (0,0), (-1, -1), 1, colors.black), ])
        tbl.setStyle(tblstyle)
        story.append(tbl)

        doc.build(story)



        




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



    def parse_text_file(text_file="tests/input2.txt"):
        bingo_boxes = []
        with open(text_file, "r") as file:
            for line in file:

                stripped_line = re.sub(r"\d+\.", "", line).strip()[:-1]
                new_font_size, new_leading = BingoCard.shrink_font_size(SQUARE_SIZE_FORMAT_CONST, SQUARE_SIZE_FORMAT_CONST, stripped_line, 'Helvetica', bingo_square_style.fontSize, bingo_square_style.leading, styles['Bingo-Square'])
                formatted_text = f'<para leading={new_leading}> <font color=black size={new_font_size}> {stripped_line} </font> </para>'
                bingo_boxes.append(Paragraph(formatted_text, styles['Bingo-Square']))
        
        return bingo_boxes
    
