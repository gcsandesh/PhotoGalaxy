from imageai.Classification import ImageClassification
from PIL import Image
from flask import Flask, request, jsonify, render_template
import numpy as np
import tensorflow as tf
from io import BytesIO
import base64
import io 


model = tf.keras.models.load_model("server\src\cnn_model.h5")

app = Flask(__name__)


@app.route("/classify", methods=["POST"])
def classify_image():
    # Get the Base64-encoded image from the request
    image_data = request.json["image"]

    # Decode the Base64-encoded image to binary
    image_bytes = base64.b64decode(image_data)

    # Load the image from bytes
    img = tf.keras.preprocessing.image.load_img(
        io.BytesIO(image_bytes), target_size=(240, 320)
    )

    # Convert the image to a numpy array
    img_array = tf.keras.preprocessing.image.img_to_array(img)

    # Normalize the image
    img_array /= 255.0

    # Predict the class
    prediction = model.predict(img_array)

    # Get the predicted class label
    if prediction[0] < 0.3:
        label = " 18+ CONTENT."
    else:
        label = "SAFE TO USE."

    return jsonify(label)


@app.route("/tags", methods=["POST"])
def generate_tags():
    # Get the Base64-encoded image from the request
    image_data = request.json["image"]

    # Decode the Base64-encoded image to binary
    image_bytes = base64.b64decode(image_data)

    # Load the image from bytes
    img = tf.keras.preprocessing.image.load_img(
        io.BytesIO(image_bytes), target_size=(240, 320)
    )

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


if __name__ == "__main__":
    app.run()
