# 本程式執行時可以利用 Python 3.7.1 建立 C:\tmp\Python312
# 為了配合 Siemens NX1872 必須使用 Python 3.7.1
import urllib.request
import os

'''
執行下列程式必須關閉系統 Proxy 設定
也不可使用下列 Proxy 設定
HTTP_PROXY = "http://p4.cycu.org:3128"
HTTPS_PROXY = "http://p4.cycu.org:3128"
'''

dir_path = os.path.dirname(os.path.realpath(__file__))
# basic files for Python installation
# before 3.12.0
#py_list = ["core", "dev", "exe", "lib", "tcltk", "tools"]
# after 3.12.0 no tools.msi
py_list = ["core", "dev", "exe", "lib", "tcltk"]
# Python version
version = "3.12.4"
# Python msi download URL
ftp = "https://www.python.org/ftp/python/" + version + "/amd64/"
# location for Portable Python
path = "Y:\\tmp\\Python312"
# create directory
try:
    os.mkdir(path)
except:
    # path exists
    pass
# get Python installation msi files and extract into target dir
for i in py_list:
    filename = i + ".msi"
    url = ftp + filename
    # download basic python msi file
    urllib.request.urlretrieve(url, filename)
    os.system("msiexec.exe /a " + i + ".msi targetdir=" + path)
    # delete msi file
    os.remove(dir_path + "\\" + i + ".msi")
    os.remove(path + "\\" + i + ".msi")