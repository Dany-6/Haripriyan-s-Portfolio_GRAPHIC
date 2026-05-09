import os
from PIL import Image

def compress_images():
    input_dir = "MY_WORKS"
    output_dir = "WEB_WORKS"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    supported_formats = ('.jpg', '.jpeg', '.png', '.webp')
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(supported_formats):
            input_path = os.path.join(input_dir, filename)
            
            # Change extension to .webp for the web version
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(output_dir, base_name + '.webp')
            
            try:
                with Image.open(input_path) as img:
                    # Convert to RGB if necessary
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Resize if extremely large (e.g., larger than 1920x1080)
                    max_size = (1920, 1080)
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                    
                    # Save as WebP with optimized quality
                    img.save(output_path, "WEBP", quality=75, optimize=True)
                    print(f"Compressed {filename} -> {base_name}.webp")
            except Exception as e:
                print(f"Error compressing {filename}: {e}")

if __name__ == "__main__":
    compress_images()
