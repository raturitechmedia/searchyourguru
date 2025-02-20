from django.urls import path
from .views import *

app_name = "pages"

urlpatterns = [
    path('',HomeView.as_view(),name="home"),
    # path('login/',LoginView.as_view(),name="login"),
    # path('signup/',SignupView.as_view(),name="signup"),
    path('verification/',VerificationView.as_view(),name="verification"),
    path('password-reset/',PasswordResetView.as_view(),name="password_reset"),
    # path('dashboard/',DashboardView.as_view(),name="dashboard"),
    # path('search/',SearchView.as_view(),name="search"),
]
