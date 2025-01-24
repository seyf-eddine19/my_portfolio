from django.db import models
from django.utils import timezone
from django.core.validators import FileExtensionValidator

# Service model
class Service(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    icons = models.TextField(null=True)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
# Skill model
class Skill(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    image = models.FileField(
        upload_to='skills/images/',
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'svg'])]
    )
    def __str__(self):
        return self.name

# Keyword model
class Keyword(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
# Project model
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='projects/images/')
    url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    services = models.ManyToManyField(Service, related_name='projects', blank=True)
    skills = models.ManyToManyField(Skill, related_name='projects', blank=True)
    keywords = models.ManyToManyField(Keyword, related_name='projects', blank=True)
    duration = models.CharField(max_length=100,  null=True, blank=True)
    project_date = models.DateField(default=timezone.now, null=True)
    is_featured = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=[
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('on_hold', 'On Hold'),
    ], default='in_progress')
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

# Project Image model
class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/images/project_%Y/')
    def __str__(self):
        return f"Image for {self.project.title}"

# Education model
class Education(models.Model):
    institution = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.degree} at {self.institution}"

# Contact Message model
class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.full_name} - {self.email}"

# Site Content model
class SiteContent(models.Model):
    CONTENT_TYPE_CHOICES = [
        ('privacy_policy', 'Privacy Policy'),
        ('terms_of_service', 'Terms of Service'),
        ('faq', 'FAQ'),
    ]

    type = models.CharField(max_length=20, choices=CONTENT_TYPE_CHOICES, unique=True)
    title = models.CharField(max_length=200)
    content = models.TextField(help_text="Content of the site section")

    def __str__(self):
        return self.get_type_display()