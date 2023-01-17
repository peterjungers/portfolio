from datetime import datetime
from flask import render_template
from portfolio import app


@app.context_processor
def get_current_year():
    return {"current_year": datetime.now().year}


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/full_stack")
def full_stack():
    title = "Full stack development"
    return render_template("full_stack.html", title=title)


@app.route("/frontend")
def frontend():
    title = "Frontend exercises"
    return render_template("frontend.html", title=title)


@app.route("/python")
def python():
    title = "Python projects"
    return render_template("python.html", title=title)


@app.route("/contact")
def contact():
    title = "Contact"
    return render_template("contact.html", title=title)
