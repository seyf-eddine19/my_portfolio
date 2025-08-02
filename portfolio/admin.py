from django.contrib import admin
from .models import Service, Keyword, Skill, Project, ProjectImage, Education, ContactMessage, SiteContent

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
 
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'project_date', 'status')
    list_filter = ('status',)
    search_fields = ('title', 'description')
    inlines = [ProjectImageInline]

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'subject', 'created_at')

class SiteContentAdmin(admin.ModelAdmin):
    list_display = ('type', 'title', 'content')

    def has_add_permission(self, request):
        # Disable add permission if there are already entries in the database
        if SiteContent.objects.count() >= len(SiteContent.CONTENT_TYPE_CHOICES):
            return False
        return super().has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        # Disable delete permission
        return False

# admin.site.site_header = 'Seyf Eddine - Portfolio'

class CustomAdminSite(admin.AdminSite):
    site_header = "Portfolio Admin"
    site_title = "Portfolio Management"
    index_title = "Welcome to the Portfolio Admin"

    def get_app_list(self, request):
        """
        Return a sorted list of apps with models in the desired order.
        """
        app_list = super().get_app_list(request)
        for app in app_list:
            if app['app_label'] == 'portfolio':
                app['models'].sort(key=lambda x: [
                    'Service',
                    'Skill',
                    'Keyword',
                    'Education',
                    'Project',
                    'ProjectImage',
                    'ContactMessage',
                    'SiteContent'
                ].index(x['object_name']))
        return app_list

custom_admin_site = CustomAdminSite(name="custom_admin")
custom_admin_site.register(Service)
custom_admin_site.register(Skill)
custom_admin_site.register(Keyword)
custom_admin_site.register(Project, ProjectAdmin)
custom_admin_site.register(Education)
custom_admin_site.register(ContactMessage, ContactMessageAdmin)
custom_admin_site.register(SiteContent, SiteContentAdmin)
