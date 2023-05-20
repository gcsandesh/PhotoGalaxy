from imageai.Classification import ImageClassification
from flask import Flask, request, jsonify
import tensorflow as tf
from io import BytesIO
from flask_cors import CORS
import numpy as np
import os
import tensorflow as tf


app = Flask(__name__)
CORS(app)


@app.route("/classify", methods=["POST"])
def classify_image():
    # Get the file from the request
    file = request.files["photo"]

    # Read the file
    img = tf.keras.preprocessing.image.load_img(
        BytesIO(file.read()), target_size=(240, 320)
    )

    # Convert the image to a numpy array
    img_array = tf.keras.preprocessing.image.img_to_array(img)

    # Normalize the image
    img_array /= 255.0

    # Add an additional dimension to match the expected input shape
    img_array = np.expand_dims(img_array, axis=0)

    model_path = os.path.join("src", "cnn_model.h5")
    if os.name == "nt":  # Windows
        model_path = os.path.join("server", model_path)

    model = tf.keras.models.load_model(model_path)

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
    # Get the file from the request
    file = request.files["photo"]

    # Read the file
    img = tf.keras.preprocessing.image.load_img(
        BytesIO(file.read())
    )

    prediction = ImageClassification()

    # Here i used pretrained inception Inception model however any one could be used
    prediction.setModelTypeAsInceptionV3()

    model_path = os.path.join("src", "inception_v3_google.pth")
    if os.name == "nt":  # Windows
        model_path = os.path.join("server", model_path)

    prediction.setModelPath(model_path)
    prediction.loadModel()

    # Give path to the image which is to be classified
    predictions = prediction.classifyImage(img, result_count=5)

    # Return the JSON response

    return jsonify(predictions[0])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
