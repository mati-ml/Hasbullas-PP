from django.urls import path
from evaluation .views import update_pasantias, update_estado, update_evaluacion, update_comentarios, view_columns

urlpatterns = [
    path('update_pasantia/', update_pasantias, name='update_pasantia'),
    path('update_estado/', update_estado, name='update_estado'),
    path('update_evaluacion/', update_evaluacion, name='update_evaluacion'),
    path('update_comentarios/', update_comentarios, name='update_comentarios'),
    path('view_columns/', view_columns, name='view_columns'),
]
