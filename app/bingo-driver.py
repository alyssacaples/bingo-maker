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
        self.styles = getSampleStyleSheet()

        # everything with double underscore
        self.__creating_default_style()
        self.__creating_title_style()
        self.__randomize = False
        self.__free_space = True
        self.__copies = 1
        self.__size = 25
        self.__title = "Bingo" 
        self.__bingo_phrases = self.parse_text_file()
        self.__middle = 12
        self.__bingo_array = None
        self.__formatted_bingo_phrases = []


    def set_copies(self, copies):
        self.__copies = copies
        
    def get_copies(self):
        return self.__copies

    def set_title(self, title_name):
        self.__title = title_name

    def get_title(self):
        return self.__title

    # def parse_input_text():
    #     # this funciton will be the main parser of the text
    #     pass
    def toggle_randomize(self):
        self.__randomize = not self.__randomize

    def get_randomize(self):
        return self.__randomize
    
    def get_middle(self):
        return self.__middle
    
    def set_middle(self, middle):
        self.__middle = middle

    def set_size(self, size):
        self.__size = size

    def get_size(self):
        return self.__size()
    
    def set_table_size(self, selected_size=None):
        #if the number of phrases are too little, create duplicates
        # need to determine middle

        # this function will change the size of the bingo table
        if selected_size == "3x3":
            self.set_size(9)
            self.set_middle(4)
        elif selected_size == "4x4":
            self.set_size(16)
            self.set_middle(8)
        else:
            self.set_size(25)
            self.set_middle(12)

    def get_table_size(self):
        return self.__size

    def toggle_free_space(self):
        # if the toggle free space is selected
        self.__free_space = not self.__free_space

    def get_free_space(self):
        return self.__free_space

    # def change_paper_size():
    #     # possibly provide option to change paper size
    #     pass

    def get_style(self, style_name):
        return self.styles[style_name]
    
    def set_bingo_phrases(self, bingo_phrases):
        self.__bingo_phrases = bingo_phrases

    def get_bingo_phrases(self):
        return self.__bingo_phrases

    def set_bingo_shape(self):
        # set new size
        # for now just keep at 25
        # convert to 5x5 array
        arr = np.array(self.get_stylicized_bingo_phrases())
        arr_reshape = arr.reshape(5,5)
        self.__bingo_array = arr_reshape.tolist()
        return None
    
    def get_stylicized_bingo_phrases(self):
        return self.__formatted_bingo_phrases
    
    def set_stylicized_bingo_phrases(self, styled_bingo_phrases):
        self.__formatted_bingo_phrases = styled_bingo_phrases

    def remove_excess_phrases(self):
        while(len(self.__bingo_phrases) > 25):
            to_remove = random.choice(self.__bingo_phrases)
            #print(to_remove)
            self.__bingo_phrases.remove(to_remove)
    
    def format_bingo_phrases(self):
        tiles = []
        for stripped_line in self.get_bingo_phrases():
            new_font_size, new_leading = BingoCard.__shrink_font_size(SQUARE_SIZE_FORMAT_CONST, SQUARE_SIZE_FORMAT_CONST, stripped_line, 'Helvetica', self.get_style('Bingo-Square').fontSize, self.get_style('Bingo-Square').leading, self.get_style('Bingo-Square'))
            formatted_text = f'<para leading={new_leading}> <font color=black size={new_font_size}> {stripped_line} </font> </para>'
            tiles.append(Paragraph(formatted_text, self.get_style('Bingo-Square')))
        self.set_stylicized_bingo_phrases(tiles)
        
    
    def get_bingo_shape(self):
        return self.__bingo_array
    
    def __creating_default_style(self):
        bingo_square_style = copy.deepcopy(styles['Normal'])
        bingo_square_style.alignment = TA_CENTER
        bingo_square_style.name = "Bingo-Square"
        bingo_square_style.fontSize = 12
        bingo_square_style.leading = 12

        self.styles.add(bingo_square_style)
    
    def __creating_title_style(self):
        bingo_title = copy.deepcopy(styles['Title'])
        bingo_title.alignment = TA_CENTER
        bingo_title.name = "Bingo-Title"
        bingo_title.fontSize = 30
        bingo_title.leading = 30

        self.styles.add(bingo_title)

    def parse_text_file(self, text_file="tests/numbers.txt"):
        bingo_boxes = []
        with open(text_file, "r") as file:
            for line in file:

                #stripped_line = re.sub(r"\d+\.", "", line).strip()[:-1] # this line will work for input2.txt
                stripped_line = line.strip()
                # will need to parse better
                #print(stripped_line)
                bingo_boxes.append(stripped_line)
        
        return bingo_boxes



    # HELPER FUNCTIONS
    def __shrink_font_size(aW, aH, text, fontName, fontSize, leading, style):
        """Shrinks font size by using pdfmetrics to calculate the height
        of a paragraph, given the font name, size, and available width."""
        def break_lines(text, aW):
            # simpleSplit calculates how reportlab will break up the lines for
            # display in a paragraph, by using width/fontsize.
            return simpleSplit(text, fontName, fontSize, aW)

        def line_wrap(lines, style):
            # Get overall width of text by getting stringWidth of longest line
            longest_line = ""
            if(lines != []):
                longest_line = max(lines)

            width = stringWidth(longest_line, style.fontName, style.fontSize)
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

    def generate_pdf(self):
        doc = SimpleDocTemplate("output_pdfs/bingo_driver_test.pdf", pagesize=letter)
        story = []

        # randomize the order
        if(self.get_randomize()):
            bingo_list = self.get_bingo_phrases()
            random.shuffle(bingo_list)
            self.set_bingo_phrases(bingo_list)

        # set free space
        if(self.get_free_space()):
            print("free space")
            print(self.get_middle())
            bingo_list = self.get_bingo_phrases()
            bingo_list[self.get_middle()] = 'FREE SPACE'
            self.set_bingo_phrases(bingo_list)

        # remove formatting piece from text function and put it here

        # free space is getting removed... find a way to set the free space during bingo shape
        self.remove_excess_phrases() # remove any excess phrases above the size... this will need to be changed to store old phrases so we can make multiple copies
        self.format_bingo_phrases()
        self.set_bingo_shape()
        story.append(Paragraph(self.get_title(), style=self.get_style("Bingo-Title")))
        story.append(Spacer(width=0, height=50))

        self.set_bingo_shape()

        tbl = Table(self.get_bingo_shape(), colWidths=[SQUARE_SIZE_CONST for x in range(5)], rowHeights=[SQUARE_SIZE_CONST for x in range(len(self.get_bingo_shape()))])
    
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



    
test_sheet = BingoCard()
test_sheet.toggle_randomize()
test_sheet.generate_pdf()