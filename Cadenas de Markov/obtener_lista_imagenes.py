import os
import json

folder = "img"  # Carpeta donde están las imágenes
images = [f"{folder}/{file}" for file in os.listdir(folder) if file.lower().endswith((".jpg", ".jpeg", ".png", ".gif"))]

print(json.dumps(images, indent=4))