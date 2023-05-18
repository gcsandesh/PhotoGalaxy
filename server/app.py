from imageai.Classification import ImageClassification
from flask import Flask, request, jsonify
import tensorflow as tf
import io
from io import BytesIO
from flask_cors import CORS
import numpy as np
import os
import tensorflow as tf
from DeepImageSearch import SearchImage
import requests
from PIL import Image


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

    model_path = os.path.join("server", "src", "cnn_model.h5")
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
        BytesIO(file.read()), target_size=(240, 320)
    )

    prediction = ImageClassification()

    # Here i used pretrained inception Inception model however any one could be used
    prediction.setModelTypeAsInceptionV3()
    model_path = os.path.join("server", "src", "inception_v3_google.pth")
    prediction.setModelPath(model_path)
    prediction.loadModel()

    # Give path to the image which is to be classified
    predictions = prediction.classifyImage(img, result_count=3)

    # Return the JSON response

    return jsonify(predictions[0])


@app.route("/similar", methods=["POST"])
def similar_recommender():
    # Get the url from the request
    url = request.args.get("url")
    response = requests.get(url)

    # Get the image data from the response
    image_data = response.content

    # Store the image data as a variable
    image_variable = BytesIO(image_data)

    similar_images = SearchImage().get_similar_images(image_variable,6)
    

    # Return the JSON response
    return jsonify(similar_images)  #https://res.cloudinary.com/dadbpnctj/image/upload/v1679638550/projects/PhotoGalaxy/


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
