from django.db import models


class Banner(models.Model):
    name = models.CharField(max_length=1024)
    banner = models.ImageField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)