from flask import Flask,render_template,redirect,request
import datetime
import sqlite3
app = Flask(__name__)



@app.route("/")
def index():
    return "Flask Working fine -- Ruban"



@app.route("/forntend.html")
def forntend_design():
    return render_template("forntend.html")



if __name__ == "__main__":

    app.run(host="0.0.0.0",port=5050,debug=True)