from imageai.Classification import ImageClassification
from flask import Flask, request, jsonify
import tensorflow as tf
import io
from io import BytesIO
from flask_cors import CORS
import numpy as np
import os
import tensorflow as tf
from DeepImageSearch import Search_Setup
import requests
from PIL import Image

# Get the url from the request
url = "https://res.cloudinary.com/dadbpnctj/image/upload/v1679638550/projects/PhotoGalaxy/hx9wehe9gydxv4q6vso9.png"#request.args.get("url")
response = requests.get(url)

# Get the image data from the response
image_data = response.content

# Store the image data as a variable
image_variable = BytesIO(image_data)

similar_images = SearchImage().get_similar_images(image_variable,6)