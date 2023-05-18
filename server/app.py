from imageai.Classification import ImageClassification
from flask import Flask, request, jsonify
import tensorflow as tf
import base64
import io
from io import BytesIO
from flask_cors import CORS
import numpy as np
import os
import tensorflow as tf

# model_path = os.path.join("server", "src", "cnn_model.h5")
model_path = os.path.join("src", "cnn_model.h5")
if os.name == "nt":  # Windows
    model_path = os.path.join("server", model_path)

model = tf.keras.models.load_model(model_path)

app = Flask(__name__)
CORS(app)


@app.route("/classify", methods=["POST"])
def classify_image():
    # # Get the Base64-encoded image from the request
    # image_data = request.json["image"]

    # # Decode the Base64-encoded image to binary
    # image_bytes = base64.b64decode(image_data)

    # # Load the image from bytes
    # img = tf.keras.preprocessing.image.load_img(
    #     io.BytesIO(image_bytes), target_size=(240, 320)
    # )

    # Get the file from the request
    file = request.files['photo']

    # Read the file
    img = tf.keras.preprocessing.image.load_img(
        BytesIO(file.read()), target_size=(240, 320))

    # Convert the image to a numpy array
    img_array = tf.keras.preprocessing.image.img_to_array(img)

    # Normalize the image
    img_array /= 255.0

    # Add an additional dimension to match the expected input shape
    img_array = np.expand_dims(img_array, axis=0)

    # Predict the class
    prediction = model.predict(img_array)

    # Get the predicted class label
    if prediction[0] < 0.3:
        label = 0  # 18+ content
    else:
        label = 1  # safe to use

    return jsonify(label)


@app.route("/tags", methods=["POST"])
def generate_tags():
    # # Get the Base64-encoded image from the request
    # image_data = request.json["image"]

    # # Decode the Base64-encoded image to binary
    # image_bytes = base64.b64decode(image_data)

    # # Load the image from bytes
    # img = tf.keras.preprocessing.image.load_img(
    #     io.BytesIO(image_bytes), target_size=(240, 320)
    # )

    # Get the file from the request
    file = request.files['file']

    # Read the file
    img = tf.keras.preprocessing.image.load_img(
        BytesIO(file.read()), target_size=(240, 320))

    prediction = ImageClassification()
    # Here i used pretrained inception Inception model however any one could be used
    prediction.setModelTypeAsInceptionV3()

    # Directly give the path where the model is stored or use above code to join paths
    prediction.setModelPath("server\src\inception_v3_google.pth")
    prediction.loadModel()

    # Give path to the image which is to be classified
    predictions = prediction.classifyImage(img, result_count=5)

    # Return the JSON response

    return jsonify(predictions[0])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
