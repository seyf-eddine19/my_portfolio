from django.shortcuts import render, redirect, get_object_or_404
from django.core.mail import send_mail
from django.contrib import messages
from django.utils import timezone
from django.db.models import Q 
from .models import Service, Skill, Project, ProjectImage, ContactMessage, SiteContent

def home(request):
    services = Service.objects.filter(is_available=True)
    projects = Project.objects.all()
    skills = Skill.objects.all()
    content = {
        'services': services,
        'projects': projects,
        'skills': skills,
    }
    return render(request, 'index.html', content)


def projects(request):
    projects = Project.objects.all()    
    content = {
        'projects': projects,
    }
    return render(request, 'projects.html', content)
    

def project_detail(request, pk):
    project = get_object_or_404(Project, id=pk)
    project_images = ProjectImage.objects.filter(project=pk)
    projects = Project.objects.all()[:3]
    content = {
        'project': project,
        'project_images': project_images,
        'projects' : projects
    }
    return render(request, 'project_detail.html', content)


def about(request):
    services = Service.objects.filter(is_available=True)
    projects = Project.objects.all()
    skills = Skill.objects.all()
    content = {
        'services': services,
        'projects': projects,
        'skills': skills,
    }
    return render(request, 'about.html', content)
    

def contact(request):
    content = {}
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Save message to database
        ContactMessage.objects.create(
            full_name=full_name,
            email=email,
            subject=subject,
            message=message,
        )
        
        # Send email
        send_mail(
            subject,
            message,
            email,
            ['seyfeddine.tlm@gmail.com'],  # Replace with your email
        )
        
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('contact')
    return render(request, 'contact.html', content)


def faq(request):
    content = {
        'faq': get_object_or_404(SiteContent, type='faq')
    }
    return render(request, 'faq.html', content)
    

def privacy_policy(request):
    content = {
        'policy': get_object_or_404(SiteContent, type='privacy_policy')
    }
    return render(request, 'privacy_policy.html', content)
    

def terms_of_service(request):
    content = {
        'terms': get_object_or_404(SiteContent, type='terms_of_service')
    }
    return render(request, 'terms_of_service.html', content)
    