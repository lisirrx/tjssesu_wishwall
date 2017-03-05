from django.db import models

class Wish(models.Model):
    title = models.CharField(max_length=20)
    introduction = models.TextField(max_length=100)
    phone_number = models.TextField(max_length=11)
    wechat = models.TextField(max_length=30)
    accepted = models.IntegerField(default=0)


