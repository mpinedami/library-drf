# SETUP


from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# DJANGO CORE SETTINGS


ALLOWED_HOSTS = []


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


DEBUG = True


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

INSTALLED_APPS_FIRST_PARTY = [
    "apps.apis.apps.ApisConfig",
    "apps.base.apps.BaseConfig",
    "apps.books.apps.BooksConfig",
]


INSTALLED_APPS_THIRD_PARTY = [
    "django_linear_migrations",
    "rest_framework",
    "debug_toolbar",
]


INSTALLED_APPS_CONTRIB = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.messages",
    "django.contrib.sessions",
    "django.contrib.staticfiles",
]


INSTALLED_APPS = (
    INSTALLED_APPS_FIRST_PARTY + INSTALLED_APPS_THIRD_PARTY + INSTALLED_APPS_CONTRIB
)


INTERNAL_IPS = [
    "127.0.0.1"
]


LANGUAGE_CODE = "en-us"


MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    #Third party
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]


ROOT_URLCONF = "core.urls"


SECRET_KEY = "django-insecure-6+z#&5@j3km%5to#n^rod*i(sxu8jheg^$%7tmm%4*in5@+ea("


TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


TIME_ZONE = "UTC"


USE_I18N = True


USE_TZ = True


WSGI_APPLICATION = "core.wsgi.application"


# DJANGO CONTRIB SETTINGS


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",  # noqa
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# PROJECT SETTINS


STATIC_URL = "static/"
