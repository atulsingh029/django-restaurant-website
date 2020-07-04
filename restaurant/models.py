from django.db import models


class Banner(models.Model):
    name = models.CharField(max_length=1024)
    banner = models.ImageField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)


class Category(models.Model):
    name = models.CharField(max_length=1024)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Menu(models.Model):
    name = models.CharField(max_length=512, null=False, blank=False )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.CharField(max_length=20)
    image = models.ImageField()
    text = models.CharField(max_length=512)

    def __str__(self):
        return self.name