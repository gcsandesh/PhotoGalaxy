from imageai.Classification import ImageClassification
import tensorflow as tf
import os



prediction = ImageClassification()

prediction.setModelTypeAsInceptionV3()

prediction.setModelPath('server\src\inception_v3_google.pth')
prediction.loadModel()

predictions = prediction.classifyImage("C:\\Users\\subek\\Pictures\\New folder\\2.jpg", result_count=5)
print(predictions)

   