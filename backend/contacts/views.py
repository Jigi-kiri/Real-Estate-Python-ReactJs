from rest_framework import permissions, status
from rest_framework.views import APIView
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail
from rest_framework.response import Response


class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, fromat=None):
        data = request.data

        try:
            send_mail(
                data['subject'],
                'Name: ' + data['name'] + '\nEmail: ' +
                data['email'] + '\n\nMassage:\n' + data['message'],
                'jimmy.patel1203@gmail.com', ['jimmy.patel1203@gmail.com', ], fail_silently=False
            )

            contact = Contact(
                name=data['name'], email=data['email'], subject=data['message'])
            contact.save()
            return Response({'success': 'Message sent successfully!'})

        except:
            return Response({'error': 'Message failled to send!'}, status=status.HTTP_400_BAD_REQUEST)
