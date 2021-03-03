from tkinter import *
from PIL import Image, ImageTk
import threading
import imageio
import os
import bluetooth
from tkinter.messagebox import showerror
from getpass import getuser
import uuid
import tkmacosx

try:
    welcome = Tk()
    windowWidth = welcome.winfo_reqwidth()
    windowHeight = welcome.winfo_reqheight()
    posRight = int(welcome.winfo_screenwidth()//2 - windowWidth//1.15)
    posDown = int(welcome.winfo_screenheight()//2 - windowHeight//0.75)
    welcome.geometry('400x200+{}+{}'.format(posRight, posDown))
    welcome.resizable(0, 0)
    welcome.title('Activate Macpods')

    def is_valid_uuid(val):
        try:
            uuid.UUID(str(val))
            return True
        except ValueError:
            return False

    try:
        os.mkdir('/Users/%s/Library/Caches/com.Jerryhu.Macpods' % getuser())
        open('/Users/%s/Library/Caches/com.Jerryhu.Macpods/license.txt' % getuser(), 'w')
        pass
    except:
        with open('/Users/%s/Library/Caches/com.Jerryhu.Macpods/license.txt' % getuser(), 'r') as readfile:
            license_key = str(readfile.read())
            try:
                if license_key[0] == 'M' and license_key[-1] == 's':
                    if 'p' in license_key and 'o' in license_key and 'd' in license_key:
                        check = license_key.replace('M', '')
                        check = check.replace('s', '')
                        check = check.replace('p', '')
                        check = check.replace('o', '')
                        check = check.replace('d', '')
                        if is_valid_uuid(check):
                            with open('/Users/%s/Library/Caches/com.Jerryhu.Macpods/license.txt' % getuser(), 'w') as writefile:
                                writefile.write(license_key)
                                welcome.destroy()
                        else:
                            pass
                    else:
                        pass
            except:
                pass

    def auth():
        license_key = str(license_entry.get())
        if license_key[0] == 'M':
            if 'p' in license_key and 'o' in license_key and 'd' in license_key:
                if license_key[-1] == 's':
                    check = license_key.replace('M', '')
                    check = check.replace('s', '')
                    check = check.replace('p', '')
                    check = check.replace('o', '')
                    check = check.replace('d', '')
                    checks = is_valid_uuid(check)
                    if checks == True:
                        with open('/Users/%s/Library/Caches/com.Jerryhu.Macpods/license.txt' % getuser(), 'w') as writefile:
                            writefile.write(license_key)
                            license_entry.destroy()
                            hint.destroy()
                            title.place_configure(relx=0.5, rely=0.2, anchor=CENTER)
                            title['text'] = 'You\'re all set ✓'
                            submit.destroy()
                            cancel.place_configure(relx=0.5, rely=0.85, anchor=CENTER)
                            cancel['text'] = 'Continue to Macpods'
                            cancel.config(command=lambda: welcome.destroy())
                    else:
                        showerror(message='Please enter a valid license key.')
                        pass
                else:
                    showerror(message='Please enter a valid license key.')
                    pass
            else:
                showerror(message='Please enter a valid license key.')
                pass
        else:
            showerror(message='Please enter a valid license key.')
            pass


    title = Label(welcome, text='Activate Macpods', font=("Roboto", 20))
    title.place(relx=0.25, rely=0.15, anchor=CENTER)

    hint = Label(welcome, text='license key:', font=("Roboto", 13))
    hint.place(relx=0.15, rely=0.5, anchor=CENTER)

    license_entry = Entry(welcome, width=30)
    license_entry.place(relx=0.6, rely=0.5, anchor=CENTER)

    cancel = tkmacosx.Button(welcome, text='Cancel', borderless=1, bg='white', fg='black', activebackground='black', activeforeground='white', command=lambda: exit(0))
    cancel.place(relx=0.6, rely=0.85, anchor=CENTER)

    submit = tkmacosx.Button(welcome, text='Activate', bg='#ed8634', fg='white', borderless=1, activebackground='#d9752c', command=auth)
    submit.place(relx=0.85, rely=0.85, anchor=CENTER)

    welcome.mainloop()
except:
    pass

root = Tk()
windowWidth = root.winfo_reqwidth()
windowHeight = root.winfo_reqheight()
root.config(bg='white')
root.title('')
root.withdraw()
root.resizable(0, 0)
posRight = int(root.winfo_screenwidth()//2 - windowWidth//1.15)
posDown = int(root.winfo_screenheight()//2 - windowHeight//0.75)
root.geometry('300x300+{}+{}'.format(posRight, posDown))

connection_video = os.path.abspath(os.getcwd() + '/Macpods/files/airpods2_connect.mp4')
video = imageio.get_reader(connection_video)

counter = 0

def stream(label):
    frame = 0
    for image in video.iter_data():
        frame += 100
        image_frame = Image.fromarray(image)
        image_frame = image_frame.resize((300, 300), Image.ANTIALIAS)
        frame_image = ImageTk.PhotoImage(image_frame)
        label.config(image=frame_image)
        label.image = frame_image

def launch():
    thread = threading.Thread(target=stream, args=(display,))
    thread.daemon = 1
    thread.start()

    root.after(ms=26100, func=launch)

def check():
    global counter
    device = bluetooth.discover_devices(lookup_names=True, lookup_class=False, duration=1)
    for addr, name in device:
        print(addr, name)
        if 'Jerry Hu\'s airpods' in name:
            if counter == 0:
                root.deiconify()
                name['text'] = name
                counter += 1
            else:
                pass
        else:
            root.withdraw()
            counter = 0

    root.after(ms=1500, func=check)

display = Label(root)
display.place(relx=0.5, rely=0.5, anchor=CENTER)

name = Label(root, text='', fg='white', bg='black', font=("Roboto", 20))
name.place(relx=0.5, rely=0.9, anchor=CENTER)

launch()
root.after(500, check)
root.mainloop()