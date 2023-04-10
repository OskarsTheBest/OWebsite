from django.http import FileResponse
from django.conf import settings
import os

def gltf_asset_view(request, filename):
    filepath = os.path.join(settings.BASE_DIR, 'gltf_assets', filename)
    return FileResponse(open(filepath, 'rb'), content_type='model/gltf+json')
