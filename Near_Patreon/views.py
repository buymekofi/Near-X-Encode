from django.shortcuts import render,redirect
from Near_Patreon.models import User
from django.http import JsonResponse

# Create your views here.
def Home(request):

    context={}
    return render(request,'home.html',context)


def CreateOrValidateUser(request):

    if request.POST:
        t_username = request.POST.get('username-id')
        try:
            temp = User.objects.get(username=t_username)
        except:
            temp=False
        if temp:
            return redirect('userpage',t_username)
        else:
            print('update userdetails')
            t_username = request.POST.get('username-id')
            t_wallet = request.POST.get('wallet-address')
            t_about = request.POST.get('about')
            t_youtube = request.POST.get('youtube')
            #t_image=request.FILES['image']
            t_user = User.objects.create(username=t_username,walletid=t_wallet,about=t_about,youtube=t_youtube)
            return redirect('userpage',t_username)
    else:
        return redirect('home')

def check_username(request):

    username = request.POST.get('username-id')
    print(username)
    data = {
       'username_exists': User.objects.filter(username=username).count()
    }
    return JsonResponse(data)


def UserPage(request,username):
    temp = User.objects.get(username=username)

    context={
        'username':username,
        'walletaddr':temp.walletid,
        'about':temp.about,
        'youtube':temp.youtube,

    }
    return render(request,'user_page.html',context)