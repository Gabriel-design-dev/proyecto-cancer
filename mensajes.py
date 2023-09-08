from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('alertas.html')
def index():
    return render_template('alertas.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    nombre = request.form['nombre']
    flash(f'¡Hola {nombre}!', 'success')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)