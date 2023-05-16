from imageai.Classification import ImageClassification
from PIL import Image
import numpy as np
import tensorflow as tf
from flask import Flask, request, jsonify, render_template


# model = tf.keras.models.load_model("server\\src\\cnn_model.h5")

# # Read the file
# img = Image.open("C:\\Users\\subek\\Pictures\\New folder\\2.jpg")

# # Resize the image to match the expected input shape of the model
# img = img.resize((320, 240))

# # Convert the image to a numpy array
# img_array = np.array(img)

# # Normalize the image
# img_array = img_array.astype('float32') / 255.0

# # Predict the class
# prediction = model.predict(np.expand_dims(img_array, axis=0))

# # Get the predicted class label
# if prediction[0] < 0.3:
#     label = "18+ CONTENT."
# else:
#     label = "SAFE TO USE."

# print(label)




from imageai.Classification import ImageClassification
from PIL import Image
from flask import jsonify

# Read the file
img = Image.open("C:\\Users\\subek\\Pictures\\New folder\\2.jpg")

# Initialize the ImageClassification model
prediction = ImageClassification()
prediction.setModelTypeAsInceptionV3()
prediction.setModelPath("server\\similar-recommender\\inception_v3_google.pth")
prediction.loadModel()

# Classify the image
predictions = prediction.classifyImage(img, result_count=5)

print(type(predictions))
print(predictions[0])

