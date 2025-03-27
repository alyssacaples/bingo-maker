from flask import render_template
from app import app
from app.bingo_form import RegistrationForm

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)

@app.route('/validate')
def login():
    form = RegistrationForm()
    return render_template('validate.html', title='Sign In', form=form)