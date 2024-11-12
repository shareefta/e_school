from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from .serializers import AdminSerializer, AdminLoginSerializer
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate
from users.models import Admin


class AdminRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        try:
            # Create the admin user with the custom Admin model
            admin = Admin.objects.create_user(
                email=data['email'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                password=data['password'],
            )
            # Create or get the token for the admin
            token, created = Token.objects.get_or_create(user=admin)
            
            return JsonResponse({
                'token': token.key,
                'message': 'Registration successful!',
            })

        except Exception as e:
            print(f"Error during registration: {str(e)}")
            return JsonResponse({'error': str(e)}, status=400)


# class AdminLoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         serializer = AdminLoginSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.validated_data
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        email = data.get('email')
        password = data.get('password')

        # Authenticate user
        admin = authenticate(request, username=email, password=password)

        if admin is not None:
            # If admin is authenticated, get or create the token
            token, created = Token.objects.get_or_create(user=admin)
            return JsonResponse({
                'token': token.key,
                'first_name': admin.first_name,
                'last_name': admin.last_name,
                'message': 'Login successful!',
            })
        else:
            # If authentication fails
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
