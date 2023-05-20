from imageai.Classification import ImageClassification
import tensorflow as tf
import os



prediction = ImageClassification()

prediction.setModelTypeAsResNet50()

prediction.setModelPath("C:\\Users\\subek\\Downloads\\resnet50-19c8e357.pth")
prediction.loadModel()

predictions = prediction.classifyImage("C:\\Users\\subek\\Desktop\\nature-quotes-landscape-1648265299.jpg", result_count=5)
print(predictions)

   