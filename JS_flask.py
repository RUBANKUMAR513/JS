from flask import Flask,render_template,redirect,request,jsonify
import datetime
import sqlite3
app = Flask(__name__)

Insertquery='INSERT INTO DATA(R1,R2,Vin,Vout) VALUES("%s","%s","%s","%s")';
Fetchquery='SELECT * from data'
sql_delete_query = """DELETE FROM DATA WHERE _id = ?"""
dbfilename = "front_design.db"


@app.route("/deletedata", methods=['POST'])
def delete_record():
    try:
        ID = request.form["id"]
        conn = sqlite3.connect(dbfilename)
        cursor = conn.cursor()
        print("SQL Query:", sql_delete_query)
        cursor.execute(sql_delete_query, (ID,))
        conn.commit()
        cursor.close()
        conn.close()
        return "Successfully deleted"

    except Exception as e:
        print("Exception:", str(e))
        return "An error occurred", 500


@app.route("/forntend")
def index():
    return "Flask Working fine -- Ruban"



@app.route("/")
def forntend_design():
    conn=sqlite3.connect(dbfilename)
    cursor=conn.cursor()
    cursor.execute(Fetchquery)
    receivedData=cursor.fetchall()
    return render_template("forntend.html",Result=receivedData)



def Createtable():
    Createtablequery="""CREATE TABLE IF NOT EXISTS "data" (
                "R1" TEXT NOT NULL,
                "R2" TEXT NOT NULL,
                "Vin" TEXT NOT NULL,
                "Vout" TEXT NOT NULL,
                "_id" INTEGER NOT NULL, PRIMARY KEY("_id" AUTOINCREMENT)
                );
                """
   
    conn=sqlite3.connect(dbfilename)
    cursor=conn.cursor()
    cursor.execute(Createtablequery)
    conn.commit()
    conn.close()

@app.route("/insertdata",methods=['POST'])
def insert():
    R1 = request.form["resistor1"]
    R2= request.form["resistor2"]
    Vin= request.form["vin"]
    Vout= request.form["vout"]
    conn=sqlite3.connect(dbfilename)
    cursor=conn.cursor()
    cursor.execute(Insertquery%(R1,R2,Vin,Vout))
    conn.commit()
    conn.close()
    return "Succesfully Added"

@app.route("/refresh")
def refresh():
    print("hii python")
    conn=sqlite3.connect(dbfilename)
    cursor=conn.cursor()
    cursor.execute(Fetchquery)
    receivedData=cursor.fetchall()
    #print(receivedData)
    data=[]
    for rows in receivedData:
        data.append({
        'R1':rows[0],
        'R2':rows[1],
        'Vin':rows[2],
        'Vout':rows[3],
        'Id':rows[4],
        })
        

    return jsonify(data)    

if __name__ == "__main__":
    Createtable()
    app.run(host="0.0.0.0",port=5050,debug=True)