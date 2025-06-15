from flask import render_template
from app import app
from app.bingo_form import BingoCreationForm

@app.route('/')
@app.route('/home')
def index():
    form = BingoCreationForm()
    return render_template('home.html', form=form)