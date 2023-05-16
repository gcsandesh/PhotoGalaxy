from flask import Flask, request, render_template
import numpy as np
import tensorflow as tf
from io import BytesIO


model = tf.keras.models.load_model('server\\src\\cnn_model.h5') 

app = Flask(__name__)


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


@app.route('/tags', methods=['POST'])
def handle_tags():
    # Perform your specific task here
    # Retrieve the data from the API call
    data = request.get_json()
    
    # Process the data and generate the array of text
    text_array = ['tag1', 'tag2', 'tag3']  # Replace with your actual logic
    
    # Return the JSON response
    return jsonify({'tags': text_array})


if __name__ == '__main__':
    app.run()

