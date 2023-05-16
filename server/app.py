from flask import Flask, request, render_template
import numpy as np
import tensorflow as tf
from io import BytesIO


model = tf.keras.models.load_model('server\\src\\cnn_model.h5') 

app = Flask(__name__, template_folder = 'templates')

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/classify', methods=['POST'])
def classify_image():
    # Get the file from the request
    file = request.files['file']

    # Read the file
    img = tf.keras.preprocessing.image.load_img(
        BytesIO(file.read()), target_size=(240, 320))

    # Convert the image to a numpy array
    img_array = tf.keras.preprocessing.image.img_to_array(img)

    # Normalize the image
    img_array /= 255.0

    # Add a batch dimension
    img_array = np.expand_dims(img_array, axis=0)

    # Predict the class
    prediction = model.predict(img_array)

    # Get the predicted class label
    if prediction[0]<0.3 :
         label = ' 18+ CONTENT.'
    else:
         label = 'SAFE TO USE.'

    # Render the index template with the file upload form and classification result
    return render_template('index.html', label=label)


if __name__ == '__main__':
    app.run()

