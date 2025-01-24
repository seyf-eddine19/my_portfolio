from django.urls import path
from . import views
from .admin import custom_admin_site

urlpatterns = [
    path('admin/', custom_admin_site.urls),
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('projects/', views.projects, name='projects'),
    path('projects/<int:pk>', views.project_detail, name='project_detail'),
    path('contact/', views.contact, name='contact'),
    path('faq/', views.faq, name='faq'),
    path('privacy-policy/', views.privacy_policy, name='privacy_policy'),
    path('terms-of-service/', views.terms_of_service, name='terms_of_service'),
]