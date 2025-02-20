AUTH_USER_MODEL = 'users.User'

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sitemaps',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',
]

# Third Party Apps
INSTALLED_APPS += [
    # 'debug_toolbar',
    'corsheaders',
    'compressor',
    'rest_framework',
]

# Custom Apps
INSTALLED_APPS += [
    'apps.custom_admin',
    'apps.users',
    'apps.pages',
    'apps.tution',
    'apps.mailers',
]
