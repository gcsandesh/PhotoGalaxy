#importing the necessary modules
import sys
import requests
from io import BytesIO
from PIL import Image
from imageai.Classification import ImageClassification

# Send a GET request to the image URL
response = requests.get(sys.argv[1])

# Get the image data from the response
image_data = response.content

# Store the image data as a variable (here we are using PIL object and not Byte object because we cannot manipulate byte object like an image to crop and preprocess )
image_variable = Image.open(BytesIO(image_data))

prediction = ImageClassification()
# Here i used pretrained inception Inception model however any one could be used
prediction.setModelTypeAsInceptionV3()

# Directly give the path where the model is stored or use above code to join paths
prediction.setModelPath('server\\similar-recommender\\inception_v3_google.pth')
prediction.loadModel()

# Give path to the image which is to be classified
predictions, probabilities = prediction.classifyImage(
    image_variable, result_count=int(sys.argv[2]))
for eachPrediction, eachProbability in zip(predictions, probabilities):
    # print(eachPrediction , " : " , eachProbability)
    print(eachPrediction)



