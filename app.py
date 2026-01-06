import streamlit as st
import streamlit.components.v1 as components
import base64
import os

# Configure Streamlit page
st.set_page_config(
    page_title="Sorting Visualizer",
    page_icon="🔢",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Read HTML file
def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

# Convert image to base64
def image_to_base64(image_path):
    with open(image_path, 'rb') as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

# Get the directory of this script
base_dir = os.path.dirname(os.path.abspath(__file__))

# Read all necessary files
html_content = read_file(os.path.join(base_dir, 'index.html'))
css_content = read_file(os.path.join(base_dir, 'style.css'))
main_js = read_file(os.path.join(base_dir, 'Scripts', 'main.js'))
visualizations_js = read_file(os.path.join(base_dir, 'Scripts', 'visualizations.js'))
bubble_js = read_file(os.path.join(base_dir, 'Scripts', 'bubble_sort.js'))
selection_js = read_file(os.path.join(base_dir, 'Scripts', 'selection_sort.js'))
insertion_js = read_file(os.path.join(base_dir, 'Scripts', 'insertion_sort.js'))
merge_js = read_file(os.path.join(base_dir, 'Scripts', 'merge_sort.js'))
quick_js = read_file(os.path.join(base_dir, 'Scripts', 'quick_sort.js'))
heap_js = read_file(os.path.join(base_dir, 'Scripts', 'heap_sort.js'))

# Convert images to base64
moon_img = image_to_base64(os.path.join(base_dir, 'images', 'moon.png'))
sun_img = image_to_base64(os.path.join(base_dir, 'images', 'sun.png'))

# Replace external CSS link with inline style
html_content = html_content.replace(
    '<link rel="stylesheet" href="./style.css">',
    f'<style>{css_content}</style>'
)

# Replace image sources with base64 data URIs
html_content = html_content.replace(
    'src="images/moon.png"',
    f'src="data:image/png;base64,{moon_img}"'
)
html_content = html_content.replace(
    'src="images/sun.png"',
    f'src="data:image/png;base64,{sun_img}"'
)

# Replace external script tags with inline scripts
html_content = html_content.replace(
    '<script src="./Scripts/main.js"></script>',
    f'<script>{main_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/visualizations.js"></script>',
    f'<script>{visualizations_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/bubble_sort.js"></script>',
    f'<script>{bubble_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/selection_sort.js"></script>',
    f'<script>{selection_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/insertion_sort.js"></script>',
    f'<script>{insertion_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/merge_sort.js"></script>',
    f'<script>{merge_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/quick_sort.js"></script>',
    f'<script>{quick_js}</script>'
)
html_content = html_content.replace(
    '<script src="./Scripts/heap_sort.js"></script>',
    f'<script>{heap_js}</script>'
)

# Embed the HTML in Streamlit
components.html(html_content, height=800, scrolling=True)

