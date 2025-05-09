from flask_wtf import FlaskForm
from wtforms import Form, StringField, TextAreaField, SelectField, IntegerField, PasswordField, BooleanField, SubmitField, validators
from wtforms.validators import DataRequired

BINGO_SIZE = [(9, "3x3"), (16, "4x4"), (25, "5x5")]

class BingoCreationForm(Form):
    title = StringField("Insert Title Here")
    bingo_input     = TextAreaField('Paste Bingo Info Here: ')
    select_bingo_size = SelectField("Select Size of Bingo Board: ", choices=BINGO_SIZE)
    free_space_bool = BooleanField("Free Space")
    create_form = SubmitField("Create Form Now")
    randomize = BooleanField("Randomize Across Copies")
    copies = IntegerField("Number of Copies")
    